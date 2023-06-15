import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreatUserDTO";

export class CreateUserUseCase {
    async execute({name, email}:CreateUserDTO): Promise<User>{
        //Verificar se o usuario já existe
        const userAlreadyExists = await prisma.user.findUnique({
            where:{
                email
            }
        });
        if(userAlreadyExists){
            //erro

        }
        //Crear Usuario
        const user = await prisma.user.create({
            data:{
                name,
                email
            }
        });
        return user;
    }
}