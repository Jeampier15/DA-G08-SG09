import reflex as rx
from rxconfig import config
import requests as rq

class EstadoDatosAPI(rx.State):
    listPers : list[dict] = []

    @rx.background
    async def obtener_datos_api(self):
        async with self:
            response = rq.get("https://rickandmortyapi.com/api/character")
            self.listPers = response.json()["results"]
    
    @rx.var
    def getDatosAPI(self) -> list[dict]:
        listaDatosAPI: list[dict] = []
        for person in self.listPers:
            listaDatosAPI.append({"name":person["name"], "location":person["location"]["name"],"image":person["image"]})
        return listaDatosAPI
    
@rx.page(route="/API", title="Usando API", on_load=EstadoDatosAPI.obtener_datos_api)
def rickAndMorty() -> rx.Component:
    return rx.vstack(
        rx.heading(rx.text("API de Rick and Morty")),
        rx.foreach(EstadoDatosAPI.getDatosAPI, mostrar_datos_api)
    )

def mostrar_datos_api(person :dict) -> rx.Component:
    return rx.card(
        rx.heading(person["name"],size="sm"),
        rx.vstack(
            rx.image(src=person["image"]),
            rx.text(f"Location: {person['location']}")
        )
    )
    
