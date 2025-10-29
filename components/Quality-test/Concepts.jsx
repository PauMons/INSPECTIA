import React from "react";

/**
 * Concepts.jsx
 * Componente que renderiza una lista de conceptos clave sobre calidad de software (en español).
 * Uso: import Concepts from "./Concepts";
 */

const CONCEPTS = [
    {
        title: "Funcionalidad",
        description:
            "Grado en que el software cumple con los requisitos y ofrece las funciones esperadas por el usuario.",
    },
    {
        title: "Confiabilidad",
        description:
            "Capacidad del sistema para operar sin fallos durante un periodo determinado y recuperar el servicio tras errores.",
    },
    {
        title: "Usabilidad",
        description:
            "Facilidad con la que los usuarios pueden aprender a usar, operar y obtener valor del software.",
    },
    {
        title: "Eficiencia",
        description:
            "Uso óptimo de recursos (CPU, memoria, ancho de banda) y tiempos de respuesta adecuados frente a la carga.",
    },
    {
        title: "Mantenibilidad",
        description:
            "Facilidad para corregir defectos, adaptarlo a nuevos requisitos y mejorar el código sin introducir errores.",
    },
    {
        title: "Portabilidad",
        description:
            "Capacidad del software para ser usado en diferentes entornos, plataformas o dispositivos con poco esfuerzo.",
    },
    {
        title: "Seguridad",
        description:
            "Protección contra accesos no autorizados, garantizando confidencialidad, integridad y disponibilidad de los datos.",
    },
    {
        title: "Compatibilidad",
        description:
            "Habilidad del software para funcionar correctamente con otros sistemas, versiones y estándares relevantes.",
    },
    {
        title: "Escalabilidad",
        description:
            "Capacidad para crecer (usuarios, datos, transacciones) manteniendo rendimiento y estabilidad.",
    },
    {
        title: "Testabilidad",
        description:
            "Facilidad para diseñar y ejecutar pruebas que verifiquen la correcta operación del sistema.",
    },
    {
        title: "Accesibilidad",
        description:
            "Diseño que permite el acceso y uso por personas con distintas capacidades, cumpliendo estándares de accesibilidad.",
    },
    {
        title: "Documentación",
        description:
            "Disponibilidad de documentación clara y actualizada para usuarios, desarrolladores y operadores.",
    },
    {
        title: "Reusabilidad",
        description:
            "Grado en que componentes, módulos o código pueden ser utilizados en diferentes partes o proyectos.",
    },
];

export default function Concepts() {
    return (
        <section style={styles.container} aria-labelledby="quality-concepts-title">
            <h2 id="quality-concepts-title" style={styles.title}>
                Conceptos de calidad de software
            </h2>

            <ul style={styles.list}>
                {CONCEPTS.map((c) => (
                    <li key={c.title} style={styles.card}>
                        <h3 style={styles.cardTitle}>{c.title}</h3>
                        <p style={styles.cardDesc}>{c.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const styles = {
    container: {
        maxWidth: 900,
        margin: "24px auto",
        padding: 16,
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#0f172a",
    },
    title: {
        fontSize: 20,
        marginBottom: 12,
    },
    list: {
        listStyle: "none",
        padding: 0,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 12,
    },
    card: {
        border: "1px solid #e6e9ef",
        borderRadius: 8,
        padding: 12,
        background: "#fff",
        boxShadow: "0 1px 2px rgba(15, 23, 42, 0.03)",
    },
    cardTitle: {
        fontSize: 16,
        margin: "0 0 8px 0",
    },
    cardDesc: {
        margin: 0,
        fontSize: 13,
        color: "#334155",
    },
};