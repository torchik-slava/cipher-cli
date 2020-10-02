# Caesar cipher-cli

This CLI allows you to encode or decode text using [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

CLI tool should accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift **(is required)**
2.  **-i, --input**: an input file (path to file)
3.  **-o, --output**: an output file (path to file)
4.  **-a, --action**: an action encode/decode **(is required)**

If 2 and 3 options are not provided input and output will be done from the console.

For encoding/decoding use only the English alphabet, all other characters should be kept untouched.

**IMPORTANT!** To run the program, you must be in the **caesar-cipher-cli** folder!

**Usage example:**

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node my_caesar_cli --action encode --shift 7 --input existing_file_name.txt 
```

```bash
$ node my_caesar_cli -a decode -s 7
```

**Result example:**

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`


