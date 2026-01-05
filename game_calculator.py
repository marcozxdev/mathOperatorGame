import sys
import os
import time
import random
import sqlite3 as sql

class DataBase:
    def __init__(self, conn):
        self.conn = conn
        self.conn.commit()
        self.conn.close()

    def sql_command(self, command):
        try:
            self.conn = sql.connect()
            self.cursor = self.conn.cursor()
            self.command = command
            self.cursor.execute(self.command)
        finally:
            self.conn.commit()
            self.conn.close()

def main_game():
    def clear_console():
        time.sleep(0.60)
        os.system('clear')

    def print_message(type_of_game):
        print(f"------ Iniciando juego de {type_of_game} ------")
    
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
        clear_console()
        print_message(select_mini_game)
    elif select_mini_game == "sumas":
        clear_console()
        print_message(select_mini_game)
    elif select_mini_game == "adventuras"
        clear_console()
        print_message(select_mini_game)

if __name__ == '__main__':
    main_game()
