import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, date, time, service, message } = body as {
      name?: string;
      contact?: string;
      date?: string;
      time?: string;
      service?: string;
      message?: string;
    };
    if (!name || !contact) {
      return NextResponse.json(
        { error: "Le nom et les coordonnées sont obligatoires" },
        { status: 400 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Requête invalide" },
      { status: 400 }
    );
  }
}
