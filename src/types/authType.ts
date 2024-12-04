// Interfaz para los datos de las peticiones de inicio de sesión
export interface LoginRequest {
    username: string;
    password: string;
}

// Interfaz para los datos de las peticiones de recuperación de contraseña
export interface RecoveryRequest {
    username: string;
    email: string;
}

// Interfaz para restablecer la contraseña

export interface RestorePasswordRequest {
    password: string;
    repeatedPassword: string;
}

// Interfaz para la contraseña actualizada en el modal

export interface UpdatedPasswordModalProps {
    action: 'forgotPassword' | 'updatePassword'; // Tipo de acción
}

export interface DashboardProps {
    isAdmin: boolean;
    displayFullNav: boolean;
}

