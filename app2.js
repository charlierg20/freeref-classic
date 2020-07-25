var author = "Author";
var year = "YEAR";
var title = "Title";
var url = "https://websitename.com";
var day;
var month;
var yyyy;

var bookAuthor = "Lastname, Initial";
var yearOfPublication = "YEAR"
var bookTitle = "Book Title";
var publisherName = "Publisher";
var placeOfPublication = "Place of Publication";

var journalAuthor;
var journalYearOfPublication;
var journalArticleTitle;
var journalTitle;
var journalVolume;
var journalIssue;
var journalPageRange1;
var journalPageRange2;

var imageAuthor;
var imageYearProduced;
var imageTitle;
var imageFormat;
var imageProvider;
var imageDay;
var imageMonth;
var imageYYYY;
var imageURL;

function generateRef() {
      author = document.getElementById("author").value;
      year = document.getElementById("year").value;
      title = document.getElementById("title").value;
      url = document.getElementById("url").value;
      day = document.getElementById("day").value;
      month = document.getElementById("month").value;
      yyyy = document.getElementById("yyyy").value;
      document.getElementById("webRef").innerHTML = author + " (" + year + "), " + title + ", available at: " + url + " (accessed on " + day + " of " + month + ", " + yyyy + ").";
    }

function generateBookRef() {
    bookAuthor = document.getElementById("bookauthor").value;
    yearOfPublication = document.getElementById("yearofpublication").value;
    bookTitle = document.getElementById("booktitle").value;
    publisherName = document.getElementById("publisher").value;
    placeOfPublication = document.getElementById("placeofpublication").value;
    document.getElementById("bookRef").innerHTML = bookAuthor + " " + yearOfPublication + ", " + bookTitle + ", " + publisherName + ", " + placeOfPublication + ".";
  }

function generateJournalRef() {
    journalAuthor = document.getElementById("journalauthor").value;
    journalYearOfPublication = document.getElementById("journalyearofpublication").value;
    journalArticleTitle = document.getElementById("journalarticletitle").value;
    journalTitle = document.getElementById("journaltitle").value;
    journalVolume = document.getElementById("journalvolume").value;
    journalIssue = document.getElementById("journalissue").value;
    journalPageRange1 = document.getElementById("journalpagerange1").value;
    journalPageRange2 = document.getElementById("journalpagerange2").value;
    
    document.getElementById("journalRef1").innerHTML = journalAuthor + " " + journalYearOfPublication + ", '" + journalArticleTitle + "', ";
    document.getElementById("journalRef2").innerHTML = journalTitle;
    document.getElementById("journalRef3").innerHTML = ", vol. " + journalVolume + ", no. " + journalIssue + ", pp. " + journalPageRange1 + "-" + journalPageRange2 + ".";
  }

function generateImageRef() {
      imageAuthor = document.getElementById("imageauthor").value;
      imageYearProduced = document.getElementById("imageyearproduced").value;
      imageTitle = document.getElementById("imagetitle").value;
      imageFormat = document.getElementById("imageformat").value;
      imageProvider = document.getElementById("imageprovider").value;
      imageDay = document.getElementById("imageday").value;
      imageMonth = document.getElementById("imagemonth").value;
      imageYYYY = document.getElementById("imageyyyy").value;
      imageURL = document.getElementById("imageurl").value;
      document.getElementById("imgRef").innerHTML = imageTitle + " " + imageYearProduced + ", " + imageFormat + ", " + imageProvider + ", accessed " + imageDay + " of " + imageMonth + " " + imageYYYY + ", <" + imageURL + ">.";
    }