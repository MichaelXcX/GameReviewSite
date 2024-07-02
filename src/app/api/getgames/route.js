import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
        const games = await sql`SELECT * FROM games;`;
        return NextResponse.json({ games }, { status: 200 });
}