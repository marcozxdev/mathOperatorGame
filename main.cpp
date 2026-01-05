#include <iostream>

void game(int* ptr) {
  std::string name;
  int answer = 0;

  std::cout << "¿Cómo te llamas?: ";
  std::cin >> name;
  std::cout << "\n";

  std::cout << "Mucho gusto " + name << std::endl;

  for (int i = 0; i < ptr.lenght(); i++) {
    ptr[i];
  }

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
  delete[] ptr;
}

int main() {
  cout << "Hola usuario" << endl;

  int* p = new int[6 << 20];
  
  game(p);

  return 0;
}
