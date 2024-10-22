import reflex as rx
from rxconfig import config

@rx.page(route="/")
def index() -> rx.Component:
    return rx.container(
        rx.color_mode.button(position="top-right"),
        rx.vstack(
            rx.heading("EXPERIENCIAS REFLEX", size='9'),
            rx.text("Rutas a otras paginas: "),
            rx.link("Contador", href="/contador"),
            rx.link("API de Rick and Morti", href="/API"),
            rx.link("lista de tareas", href="/lista"),
            spacing="5",
            justify="center",
            min_height="85vh"
        )
    )

app = rx.App()
app.add_page(index)