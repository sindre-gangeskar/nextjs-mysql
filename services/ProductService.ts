import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default class ProductService {
	static async getAll() {
		try {
			const products = await prisma.product.findMany();
			return products;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async create(name: string, description: string, categoryId: number, imgUrl?: string) {
		try {
			const category = await prisma.category.findFirstOrThrow({ where: { id: categoryId } });
			return await prisma.product.create({ data: { name: name, description: description, imgUrl: imgUrl, categoryId: category.id } });
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async update(id: number, data: Partial<{ name: string; description: string; categoryId: number; imgUrl: string }>) {
		try {
			return await prisma.product.update({ data: data, where: { id: +id } });
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
