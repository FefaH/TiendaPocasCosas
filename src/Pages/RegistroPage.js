import React, {useState} from 'react'

function RegistroPage () {

    const [form, setForm] = useState({nombre: '', apellido: '', email: '', password: ''})
   
    const handleSubmit = (event) => {
        console.log('form: ', form)
        event.preventDefault()
        if (!form.nombre.trim()){
            alert('El campo nombre se encuentra vacio')
            return
        }
        if (!form.apellido.trim()){
            alert('El campo apellido se encuentra vacio')
            return
        }
        if (!form.email.trim()){
            alert('El campo email se encuentra vacio')
            return
        }
        if (!form.password.trim()){
            alert('El campo password se encuentra vacio')
            return
        }
        alert('Bienvenido, datos cargados con exito!')
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setForm({...form, [name]:value})
    }
    return (
        <div className="App container" style={{marginTop: '70px'}}>
            <form onSubmit={handleSubmit}>
                <div class='form-group'>
                    <label style={{color: 'white'}}>Nombre</label>
                    <input class="form-control" type='text' name='nombre' value={form.nombre} onChange={handleChange}></input>
                </div>
                <div class='form-group'>
                    <label style={{color: 'white'}}>apellido</label>
                    <input class="form-control" type='text' name='apellido' value={form.apellido} onChange={handleChange}></input>
                </div>
                <div class='form-group'>
                    <label style={{color: 'white'}}>Email</label>
                    <input class="form-control" type='email' name='email' value={form.email} onChange={handleChange}></input>
                </div>
                <div class='form-group'>
                    <label style={{color: 'white'}}>Password</label>
                    <input class="form-control" type='password' name='password' value={form.password} onChange={handleChange}></input>
                </div>
                <button class="btn btn-dark" type='submit'>Registrate</button>
               
            </form>
        </div>
    )
}

export default RegistroPage
