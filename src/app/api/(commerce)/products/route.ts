import { NextResponse, NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import ProductService from "@root/services/ProductService";
export async function GET() {
	try {
		const products = await ProductService.getAll();
		return NextResponse.json({ message: products.length > 0 ? "Products found" : "No products found", ...(products.length > 0 ? products : null) });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "An internal server error has occurred while trying to retrieve products" }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		await ProductService.create(body.name, body.description, body.categoryId, body?.imgUrl);
		return NextResponse.json({ message: "Successfully created product!" }, { status: 201 });
	} catch (error) {
		console.error(error);

		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error?.code === "P2025") return NextResponse.json({ message: "Cannot create product with provided category id - no category with provided id exists" }, { status: 404 });
			if (error.code === "P2002") return NextResponse.json({ message: "Cannot create product, another product with the same name already exists" }, { status: 409 });
		}
		return NextResponse.json({ message: "An internal server error has occurred while trying to create a product" }, { status: 500 });
	}
}

