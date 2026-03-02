import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function POST(req: Request) {

  try {
    const body = await req.json()
    const { email, number, name, message, } = body
    const cleanedNumber = (number || '').replace(/\D/g, '')

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email' },
        { status: 400 }
      )
    }
    

    if (!cleanedNumber || cleanedNumber.length < 10) {
    return NextResponse.json(
        { error: 'Invalid number' },
        { status: 400 }
    );
    }


    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      )
    }


    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    const query = `
      INSERT INTO feedback ( email, number, name, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `
    const values = [ email, cleanedNumber, name, message]

    const result = await pool.query(query, values)

    return NextResponse.json(
      { success: true, data: result.rows[0] },
      { status: 201 }
    )

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}