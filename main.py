from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Dados(BaseModel):
    peso: float
    altura: float

@app.post("/calcular")
def calcular_imc(dados: Dados):
    imc = dados.peso / (dados.altura ** 2)
    return {"imc": imc}