import { IResolvers } from "@graphql-tools/utils";


const query: IResolvers = {
    Query: {
        hola(): string{
            return 'Hola Mundosssss!';
        },
        holaConNombre(__: void, { nombre }, context, info): string{
            return `Hola Mundo ${nombre}`
        },
        holaAlCursoGraphQL(): string {
            return 'Hola mundo en el curso de GraphQL';
        },
        nombre(): string{
            return 'Juan';
        }
    }
} 

export default query;