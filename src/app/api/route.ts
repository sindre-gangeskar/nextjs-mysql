import { NextResponse } from "next/server";

export function GET() {
	try {
		return NextResponse.json({ message: "Hi! This is a get request made to the root API endpoint" }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "An internal server error has occurred" }, { status: 500 });
	}
}
