const letters = new Map([
    ['a', '.-'],
    ['b', '-...'],
    ['c', '-.-.'],
    ['d', '-..'],
    ['e', '.'],
    ['f', '..-.'],
    ['g', '--.'],
    ['h', '....'],
    ['i', '..'],
    ['j', '.---'],
    ['k', '-.-'],
    ['l', '.-..'],
    ['m', '--'],
    ['n', '-.'],
    ['o', '---'],
    ['p', '.--.'],
    ['q', '--.-'],
    ['r', '.-.'],
    ['s', '...'],
    ['t', '-'],
    ['u', '..-'],
    ['v', '...-'],
    ['w', '.--'],
    ['x', '-..-'],
    ['y', '-.--'],
    ['z', '--..'],
    [" ", "/"],
    [".", ".-.-.-"],
    [",", "--..--"],
    ["?", "..--.."],
    ["'", ".----."],
    ["!", "-.-.--"],
    ["/", "-..-."]
]);

function get_key(map, value) {
    matches = [...map].find(([key, val]) => val == value)
    if (matches != undefined) {
        return matches[0]
    } else {
        return undefined;
    }
}

function text_to_morse(text) {
    var char_array = text.toLowerCase().split('');
    morse_array = char_array.map(x => {
        
        if (letters.has(x)) {
            return letters.get(x)
        } else {
            return ""
        }
    });
    return morse_array.join(" ");
}

function morse_to_text(morse) {
    var morse_array = morse.split(' ');
    char_array = morse_array.map(x => {
        var key = get_key(letters, x)
        if (key != undefined) {
            return key
        } else {
            return ""
        }
    });
    return char_array.join("");
}

function translate_text_to_morse() {
    var input = document.getElementById("input_text");
    var output = document.getElementById("output_morse");
    console.log(input.value);
    output_text = text_to_morse(input.value);
    console.log(output_text);
    output.innerHTML = output_text;
}

function translate_morse_to_text() {
    var input = document.getElementById("input_morse");
    var output = document.getElementById("output_text");
    console.log(input.value);
    output_text = morse_to_text(input.value);
    console.log(output_text);
    output.innerHTML = output_text;
}
