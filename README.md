# Servicio de Impresión Térmica con Node.js

Este repositorio contiene la solución a la prueba técnica para el desarrollo de un servicio backend encargado de gestionar impresiones en hardware térmico.

El proyecto implementa una arquitectura modular y utiliza el **Patrón de Diseño Builder** para la gestión de la impresora.

## 🎯 Objetivos de la Prueba

El desarrollo de esta solución se centró en cumplir los siguientes 4 requerimientos funcionales y técnicos:

1.  **Ejecución del Servidor**: Poner en marcha un servidor web (Node.js).
2.  **Endpoint de Impresión**: Crear un controlador que exponga la ruta `GET /print`.
3.  **Lógica de Servicio**: Crear el servicio encargado de orquestar y realizar la impresión.
4.  **Implementación del Patrón Builder**: Realizar la implementación de la librería `node-thermal-printer` utilizando estrictamente el patrón de diseño **Builder** para la construcción del objeto impresora.

## 📋 Tabla de Contenidos

1. [Objetivos de la Prueba](#objetivos-de-la-prueba)
2. [Requisitos Previos](#requisitos-previos)
3. [Instalación y Ejecución](#instalación-y-ejecución)
4. [API Reference](#api-reference)
5. [Arquitectura y Patrones](#arquitectura-y-patrones)

## 🛠 Requisitos Previos

* **Node.js**: v14.0.0 o superior.
* **Impresora Térmica**: Conectada vía red o USB (o simulador).

## 🚀 Instalación y Ejecución

1.  **Clonar e instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Ejecutar el servidor:**
    ```bash
    # Modo desarrollo
    npm run dev
    
    # Modo producción
    npm start
    ```
    El servidor iniciará en el puerto `3000` (por defecto).

## 📡 API Reference

### Realizar Impresión

Endpoint solicitado en el requerimiento #2.

* **URL:** `/print`
* **Método:** `GET`
* **Descripción:** Dispara el proceso de impresión utilizando la configuración construida por el Builder.
* **Respuesta Exitosa (200 OK):**
    ```json
    {
      "status": "success",
      "message": "Impresión enviada correctamente"
    }
    ```

## 🏗 Arquitectura y Patrones

Para cumplir con el requerimiento #4 y garantizar un código limpio, se estructuró el proyecto de la siguiente manera:

### Implementación del Builder (`/builders`)
Se encapsuló la complejidad de `node-thermal-printer` dentro de una clase `PrinterBuilder`.

**Beneficios aplicados:**
* **Separación de construcción y representación:** Permite configurar parámetros (interfaz, tipo de driver, ancho de papel) paso a paso antes de obtener la instancia final.
* **Legibilidad:** Evita tener objetos de configuración gigantes en el servicio principal.

### Capa de Servicio (`/services`)
Cumple con el requerimiento #3. El servicio utiliza el `PrinterBuilder` para obtener la instancia y ejecutar los comandos de impresión (texto, corte de papel, etc.), manteniendo la lógica de negocio separada del controlador HTTP.
