import { NextResponse, NextRequest } from "next/server";
import CategoryService from "@root/services/CategoryService";
import { Prisma } from "@prisma/client";
export async function GET() {
	try {
		const data = await CategoryService.getAll();
		return NextResponse.json({ message: "This is the categories API route", categories: data }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "An internal server error has occurred" }, { status: 500 });
	}
}

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		await CategoryService.create(body.name, body.description);
		return NextResponse.json({ message: "Successfully created a category" }, { status: 201 });
	} catch (error) {
		console.error(error);
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2002") return NextResponse.json({ message: "Category with the same name already exists" }, { status: 409 });
		}
		return NextResponse.json({ message: error || "An internal server error has occurred" }, { status: 500 });
	}
}
