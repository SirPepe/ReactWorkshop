/*
  Diese TYPESCRIPT-KLASSE beschreibt einen einzelnen Todo-Punkt-Datensatz.
*/
class Item {
  // Tipp: "public foo" in im Constructor-Parameter setzt diesen Wert direkt
  // als Objekt-Property So spart man sich this.foo = foo, this.bar = bar etc.
  constructor(
    public title: string,
    public details:string,
    public done:boolean,
    public id:number
  ){}
}


/*
  REDUCER-FUNKTIONEN beschreiben den State. Drei eiserne Regeln:
  1. Es gibt nur einen State. Reducer bearbeiten jeweils einen Teil dieses
     globalen State. Gefühlt setzt sich der globale State aus Sub-States
     zusammen, die durch die jeweiligen Reducer beschrieben werden.
  2. State ist Read-Only. Auf dem Store-Objekt werden über den Umweg von
     ACTION CREATORs verschiedene ACTIONS getriggert, die ihrerseits die
     Reducer auslösen
  3. Reducer sind PURE FUNCTIONS über einen State und eine Action. Sie erzeugen
     auf dem alten State und der Action ein neues State-Objekt, das den neuen
     Zustand des Sub-States beschreibt. Wichtig: Es wird immer ein neuer
     State aus dem alten State erzeugt, nie einfach der der alte State
     verändert
*/ 
export default (state: Item[] = [], action: any): Item[] => {
  const index = state.findIndex(item => item.id === action.id);
  switch (action.type) {
    case "ADD_TODO":
      // Es muss immer ein NEUER State gebaut werden - in diesem Fall ein neues
      // Array mit dem Inhalt des alten State plus einem neuen Item
      return [
        ...state,
        new Item(action.title, action.details, false, action.id)
      ];
    case "REMOVE_TODO":
      // Lösch-Aktion: ein neues Array, bestehend aus den Items vor und nach
      // dem gelöschten Array
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
      return null;
    case "TOGGLE_TODO":
      // Abhak-Aktion: ein neues Array
      return [
        // ... bestehend aus den Items vor dem zu modifizierenden Element...
        ...state.slice(0, index),
        // ... einem neuen Objekt {}, in das die Eigenschaften des alten
        // Elements kopiert und die zu ändernden Bestandteile überschrieben
        // werden...
        Object.assign({}, state[index], {
            done: !state[index].done
        }),
        // ... und den Items nach dem zu modifizierenden Element
        ...state.slice(index + 1)
      ];
    default:
      return state
  }
};