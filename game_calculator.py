import sys
import time
import random

level = """1. Fácil 2. Medio 3. Avanzado

¡Diviértete! :)

"""

def game():
    try:
        user_name = input("¿Cómo te llamas?: ").title()
        print(f"{level}\n")

        question = input(f"¿{user_name} cuál elijes?: ").lower()
        question.strip()

        if question == "basico" or question == "básico":
            print("Iniciando el juego....")
            time.sleep(1)
        elif question == "medio":
            print("Iniciando el juego....")
            time.sleep(1)
        elif question == "avanzado":
            print("Iniciando el juego....")
            time.sleep(1)
    except EOFError:
        print("No estás en un entorno interactivo, tu entorno no pemrite entrada (input)")

if __name__ == '__main__':
    game()
