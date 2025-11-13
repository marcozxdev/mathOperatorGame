#include <iostream>

using namespace std;

void game() {
  string name;
  int answer = 0;
  
  cout << "¿Cómo te llamas?: ";
  cin >> name;
  cout << "\n";

  cout << "Mucho gusto " + name << endl;

  while (true) {
    cout << "¿Cuánto es 60 + 80?: "
    cin >> answer;
    cout << "\n";

    switch (answer) {
      case 140:
        cout << "¡Es correcto!" << endl;
        break;
    default:
        cout << "¡Es Incorrecto!" << endl;
        break;
    }
  }
}

int main() {
  cout << "Hola usuario" << endl;
  game();
  
  return 0;
}
