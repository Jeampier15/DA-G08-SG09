import reflex as rx

from rxconfig import config

class State(rx.State):
    
    count: int = 0

    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1

@rx.page(route='/contador', title='Contador')
def Contador() -> rx.Component:
    return rx.container(
        rx.color_mode.button(position="top-right"),
        rx.vstack(
            rx.heading("EXPERIENCIA 1 :) ", size="9"),
            rx.text(
                "El Componente Contador"
            ),
            rx.heading("Contador:"),
            rx.text(State.count, size="7"), 
            rx.hstack(
                rx.button("Incrementar", on_click=State.increment),
                rx.button("Decrementar", on_click=State.decrement),
            ),
            spacing="5",
            justify="center",
            min_height="85vh",
        ),
        rx.logo(),
    )