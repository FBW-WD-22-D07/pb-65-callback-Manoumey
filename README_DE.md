# Callbacks
- Arbeite in `solution.js`

#### Benutzer grüßen
* Erstelle eine Funktion namens `greetMessage`, die eine Begrüßungsnachricht für einen als Argument übergebenen Namen in der Konsole ausgibt.
* Erstellen Sie eine Funktion namens `greetUsers`, die ein Array von Benutzern und die `greetMessage` als Callback-Funktion erhält und jeden Benutzer begrüßt.


```javascript
    greetMessage("John") // gibt "Guten Morgen, John" aus

    greetUsers(["John", "Peter", "Mark"], greetMessage)
    // "Guten Morgen, John"
    // "Guten Morgen, Peter"
    // "Guten Morgen, Markus"
```
