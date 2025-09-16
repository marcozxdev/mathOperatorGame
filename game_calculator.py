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
            select_operation = input(user_name + " \n¿con que operación quieres jugar. Suma, resta, multi o div?: ").lower()
            select_operation.strip()
            
            if select_operation == "suma" or select_operation == "sumar":
                pass
        
        elif question == "medio":
            print("Iniciando el juego....")
            time.sleep(1)
            select_operation = input(user_name + " \n¿con que operación quieres jugar. Suma, resta, multi o div?: ").lower()
            select_operation.strip()
            
            if select_operation == "suma" or select_operation == "sumar":
                pass
        
        elif question == "avanzado":
            print("Iniciando el juego....")
            time.sleep(1)
            select_operation = input(user_name + " \n¿con que operación quieres jugar. Suma, resta, multi o div?: ").lower()

            if select_operation == "suma" or select_operation == "sumar":
                pass
    
    except EOFError:
        print("No estás en un entorno interactivo, tu entorno no pemrite entrada (input)")

if __name__ == '__main__':
    game()
