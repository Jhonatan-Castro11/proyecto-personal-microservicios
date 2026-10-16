# Proyecto Personal: Task Management Microservices

Este es un proyecto de aprendizaje donde implemento la base de una arquitectura de microservicios utilizando comunicación sincrónica.

## Arquitectura

El sistema se compone de tres piezas fundamentales:

1. **API Gateway (Puerto 3000)**: Actúa como el punto de entrada único. Recibe las peticiones del cliente y las redirige al servicio correcto.
2. **User Service (Puerto 3003)**: Gestiona la información de los usuarios.
3. **Task Service (Puerto 3004)**: Gestiona las tareas y se comunica con el User Service para obtener datos del propietario de la tarea.

## Cómo ejecutarlo

1. **Instalar dependencias**: Entrar en cada carpeta (`api-gateway`, `user-service`, `task-service`) y ejecutar `npm install`.
2. **Iniciar servicios**: Ejecutar `npm start` en cada carpeta en terminales separadas.
3. **Probar el sistema**:
   - Ver usuarios: `http://localhost:3000/users`
   - Ver tareas y datos del usuario: `http://localhost:3000/tasks/user/1`

## Aprendizajes Aplicados
- Implementación de un **API Gateway** para simplificar la interfaz del cliente.
- **Comunicación Inter-servicio**: Uso de HTTP (Axios) para que un servicio consuma datos de otro.
- **Desacoplamiento**: Cada servicio tiene su propia responsabilidad y puede escalar de forma independiente.
