export declare type UserRoleType = 'admin' | 'editor' | 'ghost';
export declare class User {
    /** 唯一标识 */
    userid: string;
    role: UserRoleType;
    username: string;
    password: string;
}
