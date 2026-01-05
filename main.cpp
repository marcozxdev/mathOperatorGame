#include <iostream>

void game(int* ptr) {
  std::tring name;
  int answer = 0;

  std::cout << "¿Cómo te llamas?: ";
  std::cin >> name;
  std::cout << "\n";

  std::cout << "Mucho gusto " + name << std::endl;

  while (true) {
    std::cout << "¿Cuánto es 60 + 80?: ";
    std::cin >> answer;
    std::cout << "\n";

    switch (answer) {
      case 140:
        std::cout << "¡Es correcto!" << endl;
        break;
    default:
        std::cout << "¡Es Incorrecto!" << endl;
        break;
    }
  }
}

int main() {
  cout << "Hola usuario" << endl;

  int* p = new int[6 << 20];
  
  game(p);

  return 0;
}
