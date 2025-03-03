import { NextResponse, NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import ProductService from "@root/services/ProductService";

export async function PUT(req: NextRequest, { params }: { params: { id: number } }) {
	try {
		const body = await req.json();
		const id = params.id;
		await ProductService.update(id, body);
		return NextResponse.json({ message: "Successfully updated product", updated: { ...body } }, { status: 200 });
	} catch (error) {
    console.error(error);
    
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2003") return NextResponse.json({ message: "Cannot update product - category with provided category id was not found" }, { status: 404 });
			if (error.code === "P2025") return NextResponse.json({ message: "Cannot update product - Could not find product with provided id" }, { status: 404 });
			if (error.code === "P2002") return NextResponse.json({ message: "Cannot update product - another product with the same name already exists" }, { status: 409 });
		}

		return NextResponse.json({ message: "An internal server error has occurred while trying to update product" }, { status: 500 });
	}
}
