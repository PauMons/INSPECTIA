import React, { useState } from 'react';

const Register = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }
        // Aquí iría la lógica para enviar los datos al backend
        // Por ejemplo, usando fetch o axios
        try {
            // await registerUser(form); // función ficticia
            setSuccess('Registro exitoso.');
            setForm({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            setError('Error al registrar usuario.');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Confirmar contraseña</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
                {success && <div style={{ color: 'green', marginTop: 10 }}>{success}</div>}
                <button type="submit" style={{ marginTop: 15 }}>Registrarse</button>
            </form>
        </div>
    );
};

export default Register;