const formulas = [
    {
        question: "f\\left(x\\right)=5x^6",
        answer: "f'\\left(x\\right)=30x^5"
    },
    {
        question: "f\\left(x\\right)=2x^(3/2)",
        answer: "f'\\left(x\\right)=3x^(1/2)"
    },
    {
        question: "f\\left(x\\right)=6x^4-x^3",
        answer: "f'\\left(x\\right)=24x^3-3x^2"
    },
    {
        question: "f\\left(x\\right)=3x^2+5x+1",
        answer: "f'\\left(x\\right)=6x+5"
    },
    {
        question: "f\\left(x\\right)=4x^(1/2)-2x-7",
        answer: "f'\\left(x\\right)=2x^(-1/2)-2"
    },
    {
        question: "f\\left(x\\right)=4x^3",
        answer: "f'\\left(x\\right)=12x^2"
    },
    {
        question: "f\\left(x\\right)=7x^5",
        answer: "f'\\left(x\\right)=35x^4"
    },
    {
        question: "f\\left(x\\right)=4x^2+3x^4",
        answer: "f'\\left(x\\right)=8x+12x^3"
    },
    {
        question: "f\\left(x\\right)=x^2+7x+5",
        answer: "f'\\left(x\\right)=2x+7"
    },
    {
        question: "f\\left(x\\right)=8x^(1/2)+2x^(-2)",
        answer: "f'\\left(x\\right)=4x^(-1/2)-4x^(-3)"
    },
    {
        question: "f\\left(x\\right)=x^2-4x^6",
        answer: "f'\\left(x\\right)=2x-24^5"
    },
    {
        question: "f\\left(x\\right)=5x^3-6x^(3/2)",
        answer: "f'\\left(x\\right)=15x^2-9x^(1/2)"
    },
    {
        question: "f\\left(x\\right)=9x^(-3)+7x^(-2)",
        answer: "f'\\left(x\\right)=-27x^(-4)-14x^(-3)"
    },
    {
        question: "f\\left(x\\right)=5-5x^(-1)",
        answer: "f'\\left(x\\right)=5x^(-2)"
    },
    {
        question: "f\\left(x\\right)=7x + \\sqrt x",
        answer: "f'\\left(x\\right)=7+1/2x^(-1/2)"
    },
    {
        question: "f\\left(x\\right)=x^6-7x^2",
        answer: "f'\\left(x\\right)=6x^5-14x"
    },
    {
        question: "f\\left(x\\right)=1-6x^(5/2)",
        answer: "f'\\left(x\\right)=15x^(3/2)"
    },
    {
        question: "f\\left(x\\right)=2x+8x^(-2)",
        answer: "f'\\left(x\\right)=2+16x^(-3)"
    },
    {
        question: "f\\left(x\\right)=(2x-1)(4x+3)",
        answer: "f'\\left(x\\right)=16x+2"
    },
    {
        question: "f\\left(x\\right)=4x^3(2-3x)",
        answer: "f'\\left(x\\right)=24x^2-48x^3"
    },
    {
        question: "f\\left(x\\right)=4x^3-9x+2",
        answer: "f'\\left(x\\right)=12x^2-9"
    },
    {
        question: "f\\left(x\\right)=6x^(-1/2)+2x",
        answer: "f'\\left(x\\right)=-3x^(-3/2)+2"
    },
    {
        question: "f\\left(x\\right)=x^4+2x^(5/2)",
        answer: "f'\\left(x\\right)=4x^3+5x^(5/2)"
    },
    {
        question: "f\\left(x\\right)=1/2x^2-4x^(-3/2)",
        answer: "f'\\left(x\\right)=x+6x^(-5/2)"
    },
    {
        question: "f\\left(x\\right)=1/2x^(1/3)+5x",
        answer: "f'\\left(x\\right)=1/6x^(-2/3)+5"
    },
    {
        question: "f\\left(x\\right)=6x^(-3/2)+4x+1",
        answer: "f'\\left(x\\right)=-9x^(-5/2)+4"
    },
    {
        question: "f\\left(x\\right)=x^4-x^(-1)",
        answer: "f'\\left(x\\right)=4x^3+x^(-2)"
    },
    {
        question: "f\\left(x\\right)=9x^2-1/2x^4",
        answer: "f'\\left(x\\right)=18x-2x^3"
    },
    {
        question: "f\\left(x\\right)=4x^(1/2)-6x^(1/3)+1/2x^(-1/4)",
        answer: "f'\\left(x\\right)=2x^(-1/2)-2x^(-2/3)-1/8x^(-5/4)"
    },
    {
        question: "f\\left(x\\right)=(8x+1/2)^2",
        answer: "f'\\left(x\\right)=128x+8"
    },
    {
        question: "f\\left(x\\right)=4 \\sqrt x - \\root(3)(x)",
        answer: "f'\\left(x\\right)=2x^(-1/2)-1/3x^(-2/3)"
    },
    {
        question: "f\\left(x\\right)=2 \\sqrt x -4 \\sqrt (x^3)",
        answer: "f'\\left(x\\right)=x^(-1/2)-6x^(1/2)"
    },
    {
        question: "f\\left(x\\right)=1/(2 \\sqrt x) + 4/(x^2)",
        answer: "f'\\left(x\\right)=-1/4x^(-3/2)-8x^(-3)"
    },
    {
        question: "f\\left(x\\right)=x \\sqrt x - 1/(x^2)",
        answer: "f'\\left(x\\right)=3/2x^(1/2)+2x^(-3)"
    },
    {
        question: "f\\left(x\\right)=4 \\sqrt x + 1/(4 \\sqrt x)",
        answer: "f'\\left(x\\right)=2x^(-1/2)-1/8x^(-3/2)"
    },
    {
        question: "f\\left(x\\right)=2/(x^3)+5x^(2/3)",
        answer: "f'\\left(x\\right)=-6x^(-4)+10/3x^(-1/3)"
    },
    {
        question: "f\\left(x\\right)=8x^(3/4)-2/(x^4)",
        answer: "f'\\left(x\\right)=6x^(-1/4)+8x^(-5)"
    },
    {
        question: "f\\left(x\\right)=2x-3/(x^2)+4 \\sqrt x + 2",
        answer: "f'\\left(x\\right)=2+6x^(-3)+2x^(-1/2)"
    },
    {
        question: "f\\left(x\\right)=\\root(3)(x^2)-3/(2x^3)",
        answer: "f'\\left(x\\right)=2/3x^(-1/3)+9/2x^(-4)"
    },
    {
        question: "f\\left(x\\right)=\\sqrt (x^3)-1/(2x^2)",
        answer: "f'\\left(x\\right)=3/2x^(1/2)+x^(-3)"
    }
]