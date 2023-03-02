import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { UsersService } from "src/modules/users/users.service";
export declare class DoesUserExist implements CanActivate {
    private readonly userService;
    constructor(userService: UsersService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    validateRequest(request: any): Promise<boolean>;
}
