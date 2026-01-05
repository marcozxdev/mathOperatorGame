import sys
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
