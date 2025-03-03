import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class CategoryService {
	static async getAll() {
		try {
			return await prisma.category.findMany();
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
	static async create(name: string, description: string) {
		try {
			return await prisma.category.create({ data: { name: name, description: description } });
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
