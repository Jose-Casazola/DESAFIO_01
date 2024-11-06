import './App.css'

function App() {

return (
    <div>
    <h1>Lista de Tareas</h1>

    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Ingrese su Tarea" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button className="btn btn-secondary" type="button" id="button-addon2">Agregar Tarea</button>
    </div>
    <hr/>

    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Su Tarea" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button className="btn btn-secondary" type="button" id="button-addon2">Eliminar Tarea</button>
    </div>
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Su Tarea" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button className="btn btn-secondary" type="button" id="button-addon2">Eliminar Tarea</button>
    </div>
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Su Tarea" aria-label="Recipient's username" aria-describedby="button-addon2"/>
      <button className="btn btn-secondary" type="button" id="button-addon2">Eliminar Tarea</button>
    </div>

    </div>     
  )
}

export default App