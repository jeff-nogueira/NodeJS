var scribble = require('scribbletune');
var clip = scribble.clip({
    notes: 'F#m C#m Dmaj Bm Emaj Amaj Dmaj C#m Amaj',
    pattern: 'x_x_x_--'.repeat(8),
    sizzle: true
});  

scribble.midi(clip, 'chords.mid');
