const About = () => {
  return (
    <>
      <div className="block">
        <div className="flex flex-col m-24">
          <h2 className="font-qs text-gray-800 font-bold text-5xl mb-16">
            Concepts
          </h2>
          <div className="flex flex-col gap-12 divide-y-2">
            <div>
              <h3 className="font-qs text-gray-800 font-bold text-3xl mb-8">
                Binary
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-qs text-gray-800 font-medium text-lg">
                  A binary number is a number expressed in the base-2 numeral
                  system or binary numeral system, a method of mathematical
                  expression which uses only two symbols: typically{" "}
                  <strong>&quot;0&quot;</strong> (zero) and{" "}
                  <strong>&quot;1&quot;</strong> (one).
                </p>
                <p className="font-qs text-gray-800 font-medium text-lg">
                  The base-2 numeral system is a positional notation with a
                  radix of 2. Each digit is referred to as a bit, or binary
                  digit. Because of its straightforward implementation in
                  digital electronic circuitry using logic gates, the binary
                  system is used by almost all modern computers and
                  computer-based devices, as a preferred system of use, over
                  various other human techniques of communication, because of
                  the simplicity of the language.
                </p>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-qs text-gray-800 font-bold text-3xl mb-8">
                Decimal
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-qs text-gray-800 font-medium text-lg">
                  The decimal numeral system (also called the base-ten
                  positional numeral system and denary /ˈdiːnəri/ or decanary)
                  is the standard system for denoting integer and non-integer
                  numbers. It is the extension to non-integer numbers of the
                  Hindu–Arabic numeral system. The way of denoting numbers in
                  the decimal system is often referred to as decimal notation.
                </p>
                <p className="font-qs text-gray-800 font-medium text-lg">
                  A decimal numeral (also often just decimal or, less correctly,
                  decimal number), refers generally to the notation of a number
                  in the decimal numeral system. Decimals may sometimes be
                  identified by a decimal separator (usually &quot;.&quot; or
                  &quot;,&quot; as in 25.9703 or 3,1415). Decimal may also refer
                  specifically to the digits after the decimal separator, such
                  as in &quot;3.14 is the approximation of π to two
                  decimals&quot;. Zero-digits after a decimal separator serve
                  the purpose of signifying the precision of a value.
                </p>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-qs text-gray-800 font-bold text-3xl mb-8">
                Binary to Decimal Conversion
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-qs text-gray-800 font-medium text-lg">
                  Binary to decimal conversion is done to represent a number
                  given in Binary Number System to its equivalent in the Decimal
                  Number System. A number system is very essential to represent
                  numbers. Every number system has a base and the base of a
                  number system is determined by the total number of digits used
                  in the number system.
                </p>
                <p className="font-qs text-gray-800 font-medium text-lg">
                  For example, the binary number system has a base of 2 because
                  it has only two digits to represent any number. Similarly, the
                  decimal number system has a base of 10, as it has 10 digits to
                  represent a number. The conversion of numbers from binary to
                  decimal is important as it helps to read numbers that are
                  represented as a set of 0s and 1s.
                </p>
              </div>
            </div>
            <div className="pt-12">
              <h3 className="font-qs text-gray-800 font-bold text-3xl mb-8">
                Binary to Decimal Conversion Formula
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-qs text-gray-800 font-medium text-lg">
                  (Decimal Number)10 = ( d 0 × 20 )+ ( d 1 × 21 )+ ( d 2 × 22 )+
                  ..... + ( d n − 1 × 2n-1)
                </p>
                <p className="font-qs text-gray-800 font-medium text-lg">
                  where, d 0 , d 1 , d 2 are the individual digits of the binary
                  number starting from the right-most position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
