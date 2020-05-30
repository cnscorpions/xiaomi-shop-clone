export interface IUser {
    _id: string;
    name: string;
    email: string; // 支持email验证，登录
    password: string;
    salt: string; // 随机盐值，用于用户鉴权
}

export interface UserDTO {
    email: string;
    password: string;
    name?: string;
}
