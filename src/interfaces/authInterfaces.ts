export interface LoginResponse {
  usuario: Usuario;
  token: string;
}
export interface LoginData {
  email: string;
  password: string;
}

export interface Usuario {
  rol: string;
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid: string;
}
