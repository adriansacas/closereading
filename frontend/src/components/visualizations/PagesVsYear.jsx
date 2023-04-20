import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

// // page count vs year published
// async function getJSON() {
//     const response = await fetch("page_vs_year.json");
//     const data = await response.json();
//     console.log(data);
// }

const data = [
    {
    "page_count": 434,
    "pub_year": 1953,
    "title": "The Short Novels of John Steinbeck"
    },
    {
    "page_count": 209,
    "pub_year": 1966,
    "title": "America and Americans"
    },
    {
    "page_count": 642,
    "pub_year": 1979,
    "title": "The Poetry of Robert Frost"
    },
    {
    "page_count": 418,
    "pub_year": 1980,
    "title": "A Confederacy of Dunces"
    },
    {
    "page_count": 484,
    "pub_year": 1981,
    "title": "The American"
    },
    {
    "page_count": 85,
    "pub_year": 1985,
    "title": "Sylvia Plath's Selected Poems"
    },
    {
    "page_count": 232,
    "pub_year": 1986,
    "title": "Poems"
    },
    {
    "page_count": 1138,
    "pub_year": 1986,
    "title": "It"
    },
    {
    "page_count": 241,
    "pub_year": 1986,
    "title": "The Wizard of Oz"
    },
    {
    "page_count": 434,
    "pub_year": 1986,
    "title": "To Build a Fire and Other Stories"
    },
    {
    "page_count": 289,
    "pub_year": 1987,
    "title": "Beloved"
    },
    {
    "page_count": 0,
    "pub_year": 1987,
    "title": "Selected Tales and Sketches"
    },
    {
    "page_count": 288,
    "pub_year": 1988,
    "title": "The Ayn Rand Lexicon"
    },
    {
    "page_count": 242,
    "pub_year": 1988,
    "title": "The Big Sleep"
    },
    {
    "page_count": 386,
    "pub_year": 1988,
    "title": "The Long Goodbye"
    },
    {
    "page_count": 932,
    "pub_year": 1989,
    "title": "Steinbeck"
    },
    {
    "page_count": 598,
    "pub_year": 1989,
    "title": "Joan of Arc"
    },
    {
    "page_count": 226,
    "pub_year": 1989,
    "title": "Red Harvest"
    },
    {
    "page_count": 210,
    "pub_year": 1989,
    "title": "The Thin Man"
    },
    {
    "page_count": 240,
    "pub_year": 1990,
    "title": "Working Days"
    },
    {
    "page_count": 196,
    "pub_year": 1990,
    "title": "Journal of a Novel"
    },
    {
    "page_count": 353,
    "pub_year": 1990,
    "title": "The Voice of Reason"
    },
    {
    "page_count": 282,
    "pub_year": 1990,
    "title": "Dorothy and the Wizard in Oz"
    },
    {
    "page_count": 113,
    "pub_year": 1990,
    "title": "My Mortal Enemy"
    },
    {
    "page_count": 386,
    "pub_year": 1991,
    "title": "Go Down, Moses"
    },
    {
    "page_count": 312,
    "pub_year": 1991,
    "title": "To Kill a Mockingbird"
    },
    {
    "page_count": 944,
    "pub_year": 1991,
    "title": "James Fenimore Cooper: Sea Tales (LOA #54)"
    },
    {
    "page_count": 852,
    "pub_year": 1992,
    "title": "Owen Meany"
    },
    {
    "page_count": 322,
    "pub_year": 1992,
    "title": "The Reivers"
    },
    {
    "page_count": 260,
    "pub_year": 1992,
    "title": "The Essays of Henry David Thoreau"
    },
    {
    "page_count": 544,
    "pub_year": 1993,
    "title": "Sailor Song"
    },
    {
    "page_count": 129,
    "pub_year": 1993,
    "title": "The Awakening"
    },
    {
    "page_count": 388,
    "pub_year": 1993,
    "title": "Free Air"
    },
    {
    "page_count": 230,
    "pub_year": 1993,
    "title": "Summer"
    },
    {
    "page_count": 290,
    "pub_year": 1993,
    "title": "The Grass Harp"
    },
    {
    "page_count": 240,
    "pub_year": 1994,
    "title": "Everyday Use"
    },
    {
    "page_count": 610,
    "pub_year": 1994,
    "title": "Collected Stories"
    },
    {
    "page_count": 238,
    "pub_year": 1994,
    "title": "Last Go Round"
    },
    {
    "page_count": 484,
    "pub_year": 1994,
    "title": "Martin Eden"
    },
    {
    "page_count": 210,
    "pub_year": 1994,
    "title": "Other Voices, Other Rooms"
    },
    {
    "page_count": 406,
    "pub_year": 1994,
    "title": "Midnight in the Garden of Good and Evil"
    },
    {
    "page_count": 228,
    "pub_year": 1994,
    "title": "The Works of Emily Dickinson"
    },
    {
    "page_count": 148,
    "pub_year": 1995,
    "title": "The Evidence of Things Not Seen"
    },
    {
    "page_count": 598,
    "pub_year": 1995,
    "title": "The Works of Walt Whitman"
    },
    {
    "page_count": 356,
    "pub_year": 1995,
    "title": "Buffalo Girls"
    },
    {
    "page_count": 434,
    "pub_year": 1995,
    "title": "The Crossing"
    },
    {
    "page_count": 916,
    "pub_year": 1995,
    "title": "Collected Stories of William Faulkner"
    },
    {
    "page_count": 1562,
    "pub_year": 1995,
    "title": "Rabbit Angstrom"
    },
    {
    "page_count": 434,
    "pub_year": 1995,
    "title": "The Crossing"
    },
    {
    "page_count": 274,
    "pub_year": 1995,
    "title": "Better Than Sex"
    },
    {
    "page_count": 577,
    "pub_year": 1996,
    "title": "Couples"
    },
    {
    "page_count": 0,
    "pub_year": 1996,
    "title": "The Stories of Vladimir Nabokov"
    },
    {
    "page_count": 370,
    "pub_year": 1996,
    "title": "Typee"
    },
    {
    "page_count": 690,
    "pub_year": 1996,
    "title": "The Portable Jack Kerouac"
    },
    {
    "page_count": 369,
    "pub_year": 1997,
    "title": "Louisa May Alcott"
    },
    {
    "page_count": 66,
    "pub_year": 1997,
    "title": "I Shall Not Be Moved"
    },
    {
    "page_count": 522,
    "pub_year": 1997,
    "title": "Complete Shorter Fiction of Herman Melville"
    },
    {
    "page_count": 310,
    "pub_year": 1997,
    "title": "Sherwood Anderson's Winesburg, Ohio"
    },
    {
    "page_count": 162,
    "pub_year": 1997,
    "title": "For Love of the Game"
    },
    {
    "page_count": 128,
    "pub_year": 1997,
    "title": "The Writing of Fiction"
    },
    {
    "page_count": 380,
    "pub_year": 1997,
    "title": "Cold Mountain"
    },
    {
    "page_count": 236,
    "pub_year": 1997,
    "title": "Focus"
    },
    {
    "page_count": 132,
    "pub_year": 1997,
    "title": "Lost Laysen"
    },
    {
    "page_count": 0,
    "pub_year": 1997,
    "title": "A Son of the Circus"
    },
    {
    "page_count": 172,
    "pub_year": 1997,
    "title": "Louisa May Alcott on Race, Sex, and Slavery"
    },
    {
    "page_count": 394,
    "pub_year": 1998,
    "title": "Collected Stories"
    },
    {
    "page_count": 416,
    "pub_year": 1998,
    "title": "Collected Stories of Carson McCullers"
    },
    {
    "page_count": 324,
    "pub_year": 1998,
    "title": "Early Poems"
    },
    {
    "page_count": 866,
    "pub_year": 1998,
    "title": "The Collected Poems of Robert Penn Warren"
    },
    {
    "page_count": 410,
    "pub_year": 1998,
    "title": "Babbitt"
    },
    {
    "page_count": 512,
    "pub_year": 1998,
    "title": "By-Line Ernest Hemingway"
    },
    {
    "page_count": 402,
    "pub_year": 1998,
    "title": "The Beautiful and Damned"
    },
    {
    "page_count": 1696,
    "pub_year": 1998,
    "title": "The Poems of Emily Dickinson"
    },
    {
    "page_count": 484,
    "pub_year": 1999,
    "title": "The Song of the Lark"
    },
    {
    "page_count": 0,
    "pub_year": 1999,
    "title": "The Civil War Trilogy"
    },
    {
    "page_count": 204,
    "pub_year": 1999,
    "title": "Walter Benjamin at the Dairy Queen"
    },
    {
    "page_count": 559,
    "pub_year": 1999,
    "title": "V."
    },
    {
    "page_count": 594,
    "pub_year": 1999,
    "title": "The Cider House Rules"
    },
    {
    "page_count": 559,
    "pub_year": 1999,
    "title": "V."
    },
    {
    "page_count": 400,
    "pub_year": 1999,
    "title": "Death in the Afternoon"
    },
    {
    "page_count": 1002,
    "pub_year": 1999,
    "title": "Dashiell Hammett: Complete Novels (LOA #110)"
    },
    {
    "page_count": 358,
    "pub_year": 2000,
    "title": "Picture This"
    },
    {
    "page_count": 118,
    "pub_year": 2000,
    "title": "A Different Kind of Christmas"
    },
    {
    "page_count": 704,
    "pub_year": 2000,
    "title": "Roots"
    },
    {
    "page_count": 368,
    "pub_year": 2000,
    "title": "A Confederacy of Dunces"
    },
    {
    "page_count": 0,
    "pub_year": 2000,
    "title": "The Collected Plays of Tennessee Williams"
    },
    {
    "page_count": 148,
    "pub_year": 2000,
    "title": "Reflections in a Golden Eye"
    },
    {
    "page_count": 360,
    "pub_year": 2000,
    "title": "Margaret Mitchell"
    },
    {
    "page_count": 868,
    "pub_year": 2000,
    "title": "The Best American Short Stories of the Century"
    },
    {
    "page_count": 324,
    "pub_year": 2001,
    "title": "Selected Poems of Robert Penn Warren"
    },
    {
    "page_count": 216,
    "pub_year": 2001,
    "title": "Kesey"
    },
    {
    "page_count": 581,
    "pub_year": 2001,
    "title": "Invisible Man"
    },
    {
    "page_count": 970,
    "pub_year": 2001,
    "title": "Dashiell Hammett: Crime Stories & Other Writings (LOA #125)"
    },
    {
    "page_count": 338,
    "pub_year": 2002,
    "title": "Living with Music"
    },
    {
    "page_count": 1337,
    "pub_year": 2002,
    "title": "Collected Stories of Raymond Chandler"
    },
    {
    "page_count": 354,
    "pub_year": 2002,
    "title": "On the Road"
    },
    {
    "page_count": 498,
    "pub_year": 2002,
    "title": "Light in August"
    },
    {
    "page_count": 320,
    "pub_year": 2002,
    "title": "Selected Letters of Nathaniel Hawthorne"
    },
    {
    "page_count": 304,
    "pub_year": 2003,
    "title": "The Color Purple"
    },
    {
    "page_count": 180,
    "pub_year": 2003,
    "title": "The Crucible"
    },
    {
    "page_count": 612,
    "pub_year": 2003,
    "title": "The Portable Walt Whitman"
    },
    {
    "page_count": 243,
    "pub_year": 2003,
    "title": "Book of Haikus"
    },
    {
    "page_count": 676,
    "pub_year": 2003,
    "title": "The Portable Henry James"
    },
    {
    "page_count": 388,
    "pub_year": 2003,
    "title": "A Lost Lady"
    },
    {
    "page_count": 148,
    "pub_year": 2003,
    "title": "Seize the Day"
    },
    {
    "page_count": 548,
    "pub_year": 2004,
    "title": "Theodore Dreiser"
    },
    {
    "page_count": 336,
    "pub_year": 2004,
    "title": "Oblivion"
    },
    {
    "page_count": 323,
    "pub_year": 2004,
    "title": "To Kill a Mockingbird"
    },
    {
    "page_count": 336,
    "pub_year": 2004,
    "title": "No Laughing Matter"
    },
    {
    "page_count": 370,
    "pub_year": 2004,
    "title": "The Killer Angels"
    },
    {
    "page_count": 896,
    "pub_year": 2004,
    "title": "Outlander"
    },
    {
    "page_count": 352,
    "pub_year": 2004,
    "title": "The Lovely Bones"
    },
    {
    "page_count": 148,
    "pub_year": 2004,
    "title": "The Member of the Wedding"
    },
    {
    "page_count": 422,
    "pub_year": 2004,
    "title": "In Search of Our Mothers' Gardens"
    },
    {
    "page_count": 320,
    "pub_year": 2005,
    "title": "Farewell, My Lovely"
    },
    {
    "page_count": 201,
    "pub_year": 2005,
    "title": "Love"
    },
    {
    "page_count": 0,
    "pub_year": 2005,
    "title": "The Complete Poems"
    },
    {
    "page_count": 192,
    "pub_year": 2005,
    "title": "Walt Whitman's Leaves of Grass"
    },
    {
    "page_count": 129,
    "pub_year": 2005,
    "title": "Ethan Frome"
    },
    {
    "page_count": 697,
    "pub_year": 2005,
    "title": "The Poems of Emily Dickinson"
    },
    {
    "page_count": 498,
    "pub_year": 2006,
    "title": "The Da Vinci Code"
    },
    {
    "page_count": 0,
    "pub_year": 2006,
    "title": "The Adventures of Augie March"
    },
    {
    "page_count": 70,
    "pub_year": 2006,
    "title": "Mid-American Chants"
    },
    {
    "page_count": 372,
    "pub_year": 2006,
    "title": "Memoirs"
    },
    {
    "page_count": 837,
    "pub_year": 2006,
    "title": "Until I Find You"
    },
    {
    "page_count": 528,
    "pub_year": 2006,
    "title": "Selected Letters of Robert Penn Warren"
    },
    {
    "page_count": 29,
    "pub_year": 2006,
    "title": "Mother"
    },
    {
    "page_count": 740,
    "pub_year": 2006,
    "title": "Sometimes a Great Notion"
    },
    {
    "page_count": 428,
    "pub_year": 2006,
    "title": "The Cave"
    },
    {
    "page_count": 534,
    "pub_year": 2006,
    "title": "The City of Falling Angels"
    },
    {
    "page_count": 291,
    "pub_year": 2007,
    "title": "The Almost Moon"
    },
    {
    "page_count": 304,
    "pub_year": 2007,
    "title": "The Almost Moon"
    },
    {
    "page_count": 372,
    "pub_year": 2007,
    "title": "The Lovely Bones"
    },
    {
    "page_count": 276,
    "pub_year": 2007,
    "title": "Louisa May Alcott's Civil War"
    },
    {
    "page_count": 898,
    "pub_year": 2007,
    "title": "Jack Kerouac: Road Novels 1957-1960 (LOA #174)"
    },
    {
    "page_count": 352,
    "pub_year": 2007,
    "title": "The Best Early Stories of F. Scott Fitzgerald"
    },
    {
    "page_count": 497,
    "pub_year": 2007,
    "title": "Elmer Gantry"
    },
    {
    "page_count": 33,
    "pub_year": 2007,
    "title": "When Charlie McButton Lost Power"
    },
    {
    "page_count": 257,
    "pub_year": 2007,
    "title": "The Road"
    },
    {
    "page_count": 404,
    "pub_year": 2007,
    "title": "The Confidence-man"
    },
    {
    "page_count": 257,
    "pub_year": 2007,
    "title": "The Road"
    },
    {
    "page_count": 768,
    "pub_year": 2007,
    "title": "The Unabridged Journals of Sylvia Plath"
    },
    {
    "page_count": 0,
    "pub_year": 2008,
    "title": "Arrowsmith"
    },
    {
    "page_count": 337,
    "pub_year": 2008,
    "title": "The Turn of the Screw and Other Stories"
    },
    {
    "page_count": 484,
    "pub_year": 2008,
    "title": "Roughing It"
    },
    {
    "page_count": 481,
    "pub_year": 2008,
    "title": "The Awakening"
    },
    {
    "page_count": 426,
    "pub_year": 2008,
    "title": "Zora Neale Hurston"
    },
    {
    "page_count": 980,
    "pub_year": 2008,
    "title": "Ray Bradbury Stories"
    },
    {
    "page_count": 388,
    "pub_year": 2008,
    "title": "The Collected Poems"
    },
    {
    "page_count": 244,
    "pub_year": 2008,
    "title": "Conversations with Hunter S. Thompson"
    },
    {
    "page_count": 300,
    "pub_year": 2008,
    "title": "Toni Morrison"
    },
    {
    "page_count": 372,
    "pub_year": 2008,
    "title": "Ghost Stories"
    },
    {
    "page_count": 672,
    "pub_year": 2009,
    "title": "A Son of the Circus"
    },
    {
    "page_count": 464,
    "pub_year": 2009,
    "title": "Columbine"
    },
    {
    "page_count": 0,
    "pub_year": 2009,
    "title": "Ayn Rand"
    },
    {
    "page_count": 368,
    "pub_year": 2009,
    "title": "Let It Snow"
    },
    {
    "page_count": 707,
    "pub_year": 2009,
    "title": "The Journal of Henry David Thoreau, 1837-1861"
    },
    {
    "page_count": 258,
    "pub_year": 2009,
    "title": "The Maples Stories"
    },
    {
    "page_count": 1104,
    "pub_year": 2009,
    "title": "Infinite Jest"
    },
    {
    "page_count": 418,
    "pub_year": 2010,
    "title": "American Psycho"
    },
    {
    "page_count": 469,
    "pub_year": 2010,
    "title": "Closing Time"
    },
    {
    "page_count": 272,
    "pub_year": 2010,
    "title": "The Victim"
    },
    {
    "page_count": 528,
    "pub_year": 2010,
    "title": "Jack Kerouac and Allen Ginsberg"
    },
    {
    "page_count": 380,
    "pub_year": 2010,
    "title": "Jack London"
    },
    {
    "page_count": 288,
    "pub_year": 2010,
    "title": "Boone's Lick"
    },
    {
    "page_count": 294,
    "pub_year": 2010,
    "title": "All My Friends Are Going to Be Strangers"
    },
    {
    "page_count": 368,
    "pub_year": 2010,
    "title": "By Sorrow's River"
    },
    {
    "page_count": 480,
    "pub_year": 2010,
    "title": "Suttree"
    },
    {
    "page_count": 608,
    "pub_year": 2010,
    "title": "Invisible Man"
    },
    {
    "page_count": 0,
    "pub_year": 2010,
    "title": "An American Tragedy"
    },
    {
    "page_count": 432,
    "pub_year": 2010,
    "title": "Thirteen Moons"
    },
    {
    "page_count": 344,
    "pub_year": 2010,
    "title": "Dust Tracks on a Road"
    },
    {
    "page_count": 480,
    "pub_year": 2010,
    "title": "Suttree"
    },
    {
    "page_count": 352,
    "pub_year": 2010,
    "title": "Everything and More: A Compact History of Infinity"
    },
    {
    "page_count": 242,
    "pub_year": 2010,
    "title": "The Informers"
    },
    {
    "page_count": 289,
    "pub_year": 2010,
    "title": "The Rules of Attraction"
    },
    {
    "page_count": 209,
    "pub_year": 2010,
    "title": "Less Than Zero"
    },
    {
    "page_count": 225,
    "pub_year": 2010,
    "title": "The Exile"
    },
    {
    "page_count": 224,
    "pub_year": 2010,
    "title": "Fear and Loathing in Las Vegas"
    },
    {
    "page_count": 240,
    "pub_year": 2010,
    "title": "To Jerusalem and Back"
    },
    {
    "page_count": 704,
    "pub_year": 2011,
    "title": "The Stories of Vladimir Nabokov"
    },
    {
    "page_count": 352,
    "pub_year": 2011,
    "title": "Shadow and Act"
    },
    {
    "page_count": 398,
    "pub_year": 2011,
    "title": "Hunger Games"
    },
    {
    "page_count": 904,
    "pub_year": 2011,
    "title": "The Collected Essays of Ralph Ellison"
    },
    {
    "page_count": 912,
    "pub_year": 2011,
    "title": "Roots: The Enhanced Edition"
    },
    {
    "page_count": 1792,
    "pub_year": 2011,
    "title": "Gregor the Overlander Collection: Books 1-5"
    },
    {
    "page_count": 545,
    "pub_year": 2011,
    "title": "The Help"
    },
    {
    "page_count": 576,
    "pub_year": 2011,
    "title": "SOMETHING HAPPENED"
    },
    {
    "page_count": 128,
    "pub_year": 2011,
    "title": "Celebrations"
    },
    {
    "page_count": 310,
    "pub_year": 2011,
    "title": "The Magic Tower and Other One-act Plays"
    },
    {
    "page_count": 1162,
    "pub_year": 2011,
    "title": "An Echo in the Bone"
    },
    {
    "page_count": 338,
    "pub_year": 2011,
    "title": "Will Grayson, Will Grayson"
    },
    {
    "page_count": 105,
    "pub_year": 2011,
    "title": "The Price"
    },
    {
    "page_count": 523,
    "pub_year": 2011,
    "title": "Catch-22"
    },
    {
    "page_count": 464,
    "pub_year": 2011,
    "title": "The New York Stories of Edith Wharton"
    },
    {
    "page_count": 402,
    "pub_year": 2011,
    "title": "The Art of the Novel"
    },
    {
    "page_count": 450,
    "pub_year": 2011,
    "title": "Hawthorne's Short Stories"
    },
    {
    "page_count": 288,
    "pub_year": 2011,
    "title": "As I Lay Dying"
    },
    {
    "page_count": 96,
    "pub_year": 2011,
    "title": "The Colossus"
    },
    {
    "page_count": 368,
    "pub_year": 2011,
    "title": "Lolita"
    },
    {
    "page_count": 454,
    "pub_year": 2012,
    "title": "Autobiography of Mark Twain"
    },
    {
    "page_count": 567,
    "pub_year": 2012,
    "title": "Fear and Loathing at Rolling Stone"
    },
    {
    "page_count": 746,
    "pub_year": 2012,
    "title": "The Complete Short Stories of Mark Twain"
    },
    {
    "page_count": 928,
    "pub_year": 2012,
    "title": "Sherwood Anderson: Collected Stories (LOA #235)"
    },
    {
    "page_count": 506,
    "pub_year": 2012,
    "title": "Vineland"
    },
    {
    "page_count": 195,
    "pub_year": 2012,
    "title": "Slow Learner"
    },
    {
    "page_count": 506,
    "pub_year": 2012,
    "title": "Vineland"
    },
    {
    "page_count": 195,
    "pub_year": 2012,
    "title": "Slow Learner"
    },
    {
    "page_count": 240,
    "pub_year": 2012,
    "title": "The Way Forward Is with a Broken Heart"
    },
    {
    "page_count": 308,
    "pub_year": 2012,
    "title": "The Illustrated Man"
    },
    {
    "page_count": 274,
    "pub_year": 2012,
    "title": "Nightwoods"
    },
    {
    "page_count": 256,
    "pub_year": 2012,
    "title": "Anything We Love Can Be Saved"
    },
    {
    "page_count": 626,
    "pub_year": 2012,
    "title": "The Lost Symbol"
    },
    {
    "page_count": 353,
    "pub_year": 2013,
    "title": "The Complete Stories"
    },
    {
    "page_count": 307,
    "pub_year": 2013,
    "title": "The Hunter"
    },
    {
    "page_count": 208,
    "pub_year": 2013,
    "title": "No Name in the Street"
    },
    {
    "page_count": 912,
    "pub_year": 2013,
    "title": "Bradbury Stories"
    },
    {
    "page_count": 191,
    "pub_year": 2013,
    "title": "Dangling Man"
    },
    {
    "page_count": 256,
    "pub_year": 2013,
    "title": "Nobody Knows My Name"
    },
    {
    "page_count": 545,
    "pub_year": 2013,
    "title": "Picked-Up Pieces"
    },
    {
    "page_count": 384,
    "pub_year": 2013,
    "title": "The Journals of Sylvia Plath"
    },
    {
    "page_count": 578,
    "pub_year": 2014,
    "title": "Inferno"
    },
    {
    "page_count": 192,
    "pub_year": 2014,
    "title": "James Baldwin: The Last Interview"
    },
    {
    "page_count": 448,
    "pub_year": 2014,
    "title": "The Hunger Games"
    },
    {
    "page_count": 672,
    "pub_year": 2014,
    "title": "Complete Short Stories Of Ernest Hemingway"
    },
    {
    "page_count": 0,
    "pub_year": 2014,
    "title": "Raymond Chandler: the Library of America Edition"
    },
    {
    "page_count": 318,
    "pub_year": 2014,
    "title": "An Innocent Abroad"
    },
    {
    "page_count": 493,
    "pub_year": 2014,
    "title": "Bleeding Edge"
    },
    {
    "page_count": 144,
    "pub_year": 2014,
    "title": "Mark Twain on Common Sense"
    },
    {
    "page_count": 172,
    "pub_year": 2014,
    "title": "Winesburg, Ohio"
    },
    {
    "page_count": 260,
    "pub_year": 2014,
    "title": "Whitman Illuminated"
    },
    {
    "page_count": 99,
    "pub_year": 2014,
    "title": "Anthem"
    },
    {
    "page_count": 480,
    "pub_year": 2014,
    "title": "Inferno: Special Illustrated Edition (Enhanced)"
    },
    {
    "page_count": 493,
    "pub_year": 2014,
    "title": "Bleeding Edge"
    },
    {
    "page_count": 0,
    "pub_year": 2014,
    "title": "A Confederacy of Dunces"
    },
    {
    "page_count": 381,
    "pub_year": 2014,
    "title": "Inherent Vice"
    },
    {
    "page_count": 338,
    "pub_year": 2014,
    "title": "Paradise"
    },
    {
    "page_count": 976,
    "pub_year": 2014,
    "title": "The David Foster Wallace Reader"
    },
    {
    "page_count": 381,
    "pub_year": 2014,
    "title": "Inherent Vice"
    },
    {
    "page_count": 0,
    "pub_year": 2014,
    "title": "Home"
    },
    {
    "page_count": 479,
    "pub_year": 2015,
    "title": "Niceville"
    },
    {
    "page_count": 624,
    "pub_year": 2015,
    "title": "Harper Lee Collection E-book Bundle"
    },
    {
    "page_count": 312,
    "pub_year": 2015,
    "title": "Dreiser's Russian Diary"
    },
    {
    "page_count": 448,
    "pub_year": 2015,
    "title": "Catching Fire"
    },
    {
    "page_count": 337,
    "pub_year": 2015,
    "title": "The Complete Poetry"
    },
    {
    "page_count": 202,
    "pub_year": 2015,
    "title": "Greek Myths"
    },
    {
    "page_count": 148,
    "pub_year": 2015,
    "title": "Zen in the Art of Writing"
    },
    {
    "page_count": 1314,
    "pub_year": 2015,
    "title": "The Penguin Arthur Miller"
    },
    {
    "page_count": 109,
    "pub_year": 2015,
    "title": "Brooklyn: A Personal Memoir"
    },
    {
    "page_count": 370,
    "pub_year": 2016,
    "title": "Billy Budd, Bartleby, and Other Stories"
    },
    {
    "page_count": 431,
    "pub_year": 2016,
    "title": "Louisa May Alcott: Her Life, Letters, and Journals"
    },
    {
    "page_count": 1184,
    "pub_year": 2016,
    "title": "It"
    },
    {
    "page_count": 192,
    "pub_year": 2016,
    "title": "To Kill a Mockingbird"
    },
    {
    "page_count": 232,
    "pub_year": 2016,
    "title": "My \u00c1ntonia"
    },
    {
    "page_count": 306,
    "pub_year": 2016,
    "title": "One Flew Over the Cuckoo's Nest"
    },
    {
    "page_count": 210,
    "pub_year": 2016,
    "title": "The Early Stories of Truman Capote"
    },
    {
    "page_count": 57,
    "pub_year": 2016,
    "title": "Poetry for Kids: Emily Dickinson"
    },
    {
    "page_count": null,
    "pub_year": 2016,
    "title": "Gone With The Wind"
    },
    {
    "page_count": 562,
    "pub_year": 2016,
    "title": "Collected Essays"
    },
    {
    "page_count": 72,
    "pub_year": 2017,
    "title": "The Hand of the Potter : a Tragedy in Four Acts(1918). By: Theodore Dreiser"
    },
    {
    "page_count": 468,
    "pub_year": 2017,
    "title": "James Fenimore Cooper, Best Novels"
    },
    {
    "page_count": 752,
    "pub_year": 2017,
    "title": "The Scarlet Letter and Other Writings"
    },
    {
    "page_count": 1343,
    "pub_year": 2017,
    "title": "The Greatest Works of F. Scott Fitzgerald - 45 Titles in One Edition"
    },
    {
    "page_count": 500,
    "pub_year": 2017,
    "title": "Sasquatch"
    },
    {
    "page_count": 288,
    "pub_year": 2017,
    "title": "Lucky"
    },
    {
    "page_count": 266,
    "pub_year": 2017,
    "title": "Forgotten Sci-Fi Classics"
    },
    {
    "page_count": 51,
    "pub_year": 2017,
    "title": "Poetry for Kids: Robert Frost"
    },
    {
    "page_count": 100,
    "pub_year": 2017,
    "title": "The Road to Oz Lyman Frank Baum"
    },
    {
    "page_count": 696,
    "pub_year": 2017,
    "title": "Carson McCullers: Stories, Plays & Other Writings (LOA #287)"
    },
    {
    "page_count": 322,
    "pub_year": 2018,
    "title": "Carrie"
    },
    {
    "page_count": 160,
    "pub_year": 2018,
    "title": "Elevation"
    },
    {
    "page_count": 288,
    "pub_year": 2018,
    "title": "To Kill a Mockingbird: A Graphic Novel"
    },
    {
    "page_count": 610,
    "pub_year": 2018,
    "title": "Origin"
    },
    {
    "page_count": 209,
    "pub_year": 2018,
    "title": "Hunter S. Thompson: The Last Interview"
    },
    {
    "page_count": 225,
    "pub_year": 2018,
    "title": "David Foster Wallace: The Last Interview Expanded with New Introduction"
    },
    {
    "page_count": 139,
    "pub_year": 2018,
    "title": "L. Frank Baum: The Wonderful Wizard of Oz (English Edition)"
    },
    {
    "page_count": 736,
    "pub_year": 2018,
    "title": "Moby-Dick"
    },
    {
    "page_count": 52,
    "pub_year": 2018,
    "title": "Desiree's Baby"
    },
    {
    "page_count": 176,
    "pub_year": 2019,
    "title": "The Neon Bible"
    },
    {
    "page_count": 304,
    "pub_year": 2019,
    "title": "A Collection of Poems by Robert Frost"
    },
    {
    "page_count": 1647,
    "pub_year": 2019,
    "title": "Delphi Collected Works of Sherwood Anderson (Illustrated)"
    },
    {
    "page_count": 0,
    "pub_year": 2019,
    "title": "John Green: The Complete Collection Box Set"
    },
    {
    "page_count": 152,
    "pub_year": 2019,
    "title": "Selected Poems by Robert Frost"
    },
    {
    "page_count": 466,
    "pub_year": 2019,
    "title": "The Killer Angels"
    },
    {
    "page_count": 36,
    "pub_year": 2019,
    "title": "Henry David Thoreau: Civil Disobedience (English Edition)"
    },
    {
    "page_count": 144,
    "pub_year": 2019,
    "title": "1922"
    },
    {
    "page_count": 245,
    "pub_year": 2020,
    "title": "Their Eyes Were Watching God"
    },
    {
    "page_count": null,
    "pub_year": 2020,
    "title": "Gone with the Wind"
    },
    {
    "page_count": 274,
    "pub_year": 2020,
    "title": "White"
    },
    {
    "page_count": 290,
    "pub_year": 2020,
    "title": "The Awakening and Selected Stories"
    },
    {
    "page_count": 400,
    "pub_year": 2020,
    "title": "Parkland"
    },
    {
    "page_count": 1072,
    "pub_year": 2020,
    "title": "Gone with the Wind"
    },
    {
    "page_count": 106,
    "pub_year": 2021,
    "title": "Nothing Personal"
    },
    {
    "page_count": 700,
    "pub_year": 2021,
    "title": "An American Tragedy - Theodore Dreiser"
    },
    {
    "page_count": 1502,
    "pub_year": 2021,
    "title": "Go Tell the Bees That I Am Gone"
    },
    {
    "page_count": 442,
    "pub_year": 2021,
    "title": "Main Street"
    },
    {
    "page_count": 209,
    "pub_year": 2022,
    "title": "Stella Maris"
    },
    {
    "page_count": 243,
    "pub_year": 2022,
    "title": "The Selected Poems of Emily Dickinson"
    },
    {
    "page_count": 2099,
    "pub_year": 2022,
    "title": "The Collected Works of Henry David Thoreau"
    },
    {
    "page_count": 401,
    "pub_year": 2022,
    "title": "The Passenger"
    },
    {
    "page_count": 12924,
    "pub_year": 2022,
    "title": "James Fenimore Cooper \u2013 Ultimate Collection"
    },
    {
    "page_count": 209,
    "pub_year": 2022,
    "title": "Stella Maris"
    },
    {
    "page_count": 401,
    "pub_year": 2022,
    "title": "The Passenger"
    },
    {
    "page_count": 337,
    "pub_year": 2023,
    "title": "The Anthropocene Reviewed"
    }
]
    // {
    //     city: "Washington, D.C.",
    //     pub_year: 4000.0,
    //     page_count: 4.0
    // },


const PagesVsYear = () => {
    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Page Count vs Year Published </h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart
                            width={400}
                            height={400}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid />
                            <XAxis type="number" dataKey="pub_year" name="Year Published" domain={[1950, 2023]}/>
                            <YAxis type="number" dataKey="page_count" name="Page Count" domain={[0, 7000]} />
                            <ZAxis dataKey="title" name="Title"/>
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter name="Books" data={data} fill="#006595" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default PagesVsYear;
