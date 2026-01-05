import sys
import time
import random

def game():
    print("------ Iniciando juego ------")

    mini_games = """
      -------------------
      # 1) Adivinanzas  #
      # 2) Sumas        #
      # 3) Adventuras   #
      -------------------
      """

    print(mini_games)

    select_mini_game = input("Seleccione un juego para jugar": )
    select_mini_game = select_mini_game.strip().lower()

    if select_mini_game == "adivinanzas":
        pass
    elif select_mini_game == "sumas":
        pass
    elif select_mini_game == "adventuras"
        pass

if __name__ == '__main__':
    game()
