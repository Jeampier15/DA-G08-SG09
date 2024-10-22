import reflex as rx

# Clase de estado para manejar el filtro de tareas
class State(rx.State):
    mostrar_solo_pendientes: bool = False  # Variable de estado inicializada en False

    # Función para alternar el filtro de mostrar solo pendientes
    def alternar_mostrar_pendientes(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes  # Alternar el estado de True a False y viceversa

# Ejemplos de listas de tareas
tareas_en_progreso = [
    {"titulo": "Terminar ITI", "estado": "En Progreso"},
    {"titulo": "Completar GDI", "estado": "Pendiente"},
]

tareas_completadas = [
    {"titulo": "Hacer Guia de desarrollo", "estado": "Completada"},
    {"titulo": "Terminar Redes III", "estado": "Pendiente"},
]

# Función para renderizar cada tarjeta de tarea
def tarjeta_tarea(tarea):
    return rx.box(
        tarea["titulo"],
        padding="10px",
        border="1px solid #ccc",
        border_radius="5px",
        margin="5px 0",
        background_color="#f0f0f0",  # Fondo más claro
        color="#333",  # Texto oscuro para mejor visibilidad
    )

# Función para renderizar una columna del Kanban
def columna_kanban(nombre, tareas):
    # Usar `rx.foreach` para manejar las tareas filtradas reactivamente
    tareas_mostradas = rx.cond(
        State.mostrar_solo_pendientes,
        [t for t in tareas if t["estado"] == "Pendiente"],  # Mostrar solo pendientes si está activado
        tareas  # Mostrar todas las tareas si no está activado
    )

    return rx.box(
        rx.heading(nombre, size="md", color="#333"),  # Color del título más oscuro
        rx.foreach(
            tareas_mostradas,  # Usamos foreach para iterar sobre la lista de tareas mostradas
            lambda tarea: tarjeta_tarea(tarea)
        ),
        margin="10px",
        padding="10px",
        border="1px solid #ddd",
        border_radius="5px",
        background_color="#fff"  # Fondo blanco para las columnas
    )

# Función para mostrar los contadores de tareas
def mostrar_contadores():
    # Contamos las tareas en progreso y completadas
    contador_en_progreso = contar_tareas_por_estado(tareas_en_progreso)
    contador_completadas = contar_tareas_por_estado(tareas_completadas)

    return rx.box(
        rx.box(f"Tareas en Progreso: {contador_en_progreso.get('En Progreso', 0)}", margin="10px 0", font_size="18px", color="#333"),
        rx.box(f"Tareas Pendientes: {contador_en_progreso.get('Pendiente', 0) + contador_completadas.get('Pendiente', 0)}", margin="10px 0", font_size="18px", color="#333"),
        rx.box(f"Tareas Completadas: {contador_completadas.get('Completada', 0)}", margin="10px 0", font_size="18px", color="#333"),
        padding="10px",
        border="1px solid #ddd",
        border_radius="5px",
        background_color="#f1f1f1",
    )

# Función para contar las tareas por estado
def contar_tareas_por_estado(tareas):
    contador = {}
    for tarea in tareas:
        estado = tarea["estado"]
        if estado in contador:
            contador[estado] += 1
        else:
            contador[estado] = 1
    return contador

# Componente principal que renderiza el tablero Kanban
def index():
    return rx.box(
        # Botón para alternar la visualización de solo pendientes
        rx.button(
            rx.cond(State.mostrar_solo_pendientes, "Mostrar Todas", "Mostrar Pendientes"),
            on_click=State.alternar_mostrar_pendientes,  # Llama a la función para alternar el estado
            background_color="#007bff",
            color="white",
            padding="10px",
            margin="10px 0",
            border_radius="5px"
        ),
        # Renderización de las columnas con sus respectivas tareas
        rx.box(
            columna_kanban("En Progreso", tareas_en_progreso),
            columna_kanban("Completadas", tareas_completadas),
            display="flex",
            justify_content="space-around"
        ),
        # Mostrar los contadores
        mostrar_contadores(),
        padding="20px",
        background_color="#282c34",  # Fondo oscuro general para contrastar
        color="white",  # Texto blanco general
    )

# Aquí se registra la página principal y se configura la aplicación
app = rx.App(state=State)
app.add_page(index)