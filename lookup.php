<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require 'db.php';

/* -----------------------------
   HELPER: HEADER
------------------------------*/
function renderHeader($title = "Diana & Michael") {
  echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Diana & Michael</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@300;400&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- HEADER -->
<header class="site-header">
  <div class="container header-inner">
    <h1 class="top-name">Diana & Michael</h1>
    
    <nav class="nav">
      <a href="home.html">Home</a>
      <a href="#schedule">Schedule</a>
      <a href="#qa">Q&A</a>
      <a href="RSVP.html">RSVP</a>
      <a href="gallery.html">Gallery</a>
      <a href="travel.html">Travel</a>
    </nav>
  </div>
</header>

<div class="hero">
HTML;
}

/* -----------------------------
   CASE 1: Selected guest
------------------------------*/
if (isset($_POST['selected_guest'])) {

  $guestId = (int)$_POST['selected_guest'];

  $stmt = $conn->prepare("SELECT group_code FROM guests WHERE id = ?");
  $stmt->bind_param("i", $guestId);
  $stmt->execute();
  $result = $stmt->get_result();

  $row = $result->fetch_assoc();

  if (!$row) {
    die("Guest not found.");
  }

  $groupCode = $row['group_code'];
}

/* -----------------------------
   CASE 2: Name search
------------------------------*/
else {

  $name = trim($_POST['name'] ?? '');

  if (strlen($name) < 2) {
    renderHeader();
    echo "<h2>Please enter at least 2 characters.</h2>";
    echo "</div></body></html>";
    exit;
  }

  $stmt = $conn->prepare("
    SELECT id, full_name, group_code 
    FROM guests 
    WHERE full_name LIKE ?
  ");

  $search = "%" . $name . "%";
  $stmt->bind_param("s", $search);
  $stmt->execute();

  $result = $stmt->get_result();
  $rows = $result->fetch_all(MYSQLI_ASSOC);
  $count = count($rows);

  /* -----------------------------
     NO MATCH FOUND
  ------------------------------*/
  if ($count === 0) {
    renderHeader("Not Found");

    echo "
      <h2>Sorry, we couldn't find your name.</h2>
      <p>Please try again.</p>
      <a href='RSVP.html' class='rsvp-btn'>Back to RSVP</a>
    ";

    echo "</div></body></html>";
    exit;
  }

  /* -----------------------------
     MULTIPLE MATCHES
  ------------------------------*/
  if ($count > 1) {
    renderHeader("Select Your Name");

    echo "<h2>Select your name</h2>";
    echo "<form method='POST' action='lookup.php'>";

    foreach ($rows as $row) {
      $id = $row['id'];
      $nameSafe = htmlspecialchars($row['full_name']);

      echo "
        <label>
          <input type='radio' name='selected_guest' value='$id' required>
          $nameSafe
        </label><br>
      ";
    }

    echo "
      <br>
      <button type='submit' class='rsvp-btn'>Continue</button>
      </form>
    ";

    echo "</div></body></html>";
    exit;
  }

  /* -----------------------------
     SINGLE MATCH
  ------------------------------*/
  $groupCode = $rows[0]['group_code'];
}

/* -----------------------------
   CHECK IF ALREADY RSVP'D
------------------------------*/
$checkStmt = $conn->prepare("
  SELECT COUNT(*) as count 
  FROM guests 
  WHERE group_code = ? AND submitted_at IS NOT NULL
");

$checkStmt->bind_param("s", $groupCode);
$checkStmt->execute();
$checkResult = $checkStmt->get_result()->fetch_assoc();

if ($checkResult['count'] > 0) {

  renderHeader("Already RSVP'd");

  echo "
    <h2>You've already RSVP'd 💌</h2>
    <p>If you need changes, please contact us.</p>
  ";

  echo "</div></body></html>";
  exit;
}

/* -----------------------------
   FETCH HOUSEHOLD
------------------------------*/
$stmt = $conn->prepare("SELECT * FROM guests WHERE group_code = ?");
$stmt->bind_param("s", $groupCode);
$stmt->execute();
$family = $stmt->get_result();

/* -----------------------------
   FINAL RSVP FORM
------------------------------*/
renderHeader("RSVP");

echo "<h2 class='date'>We hope you can make it!</h2>";

echo "<div class='card'>";
echo "<form action='submit-rsvp.php' method='POST'>";

echo "<input type='hidden' name='group_code' value='" . htmlspecialchars($groupCode) . "'>";

while ($guest = $family->fetch_assoc()) {

  $id = $guest['id'];
  $name = htmlspecialchars($guest['full_name']);

  echo "
    <div>
      <strong>$name</strong><br>

      <label>
        <input type='radio' name='attending[$id]' value='1' required>
        Attending
      </label>

      <label>
        <input type='radio' name='attending[$id]' value='0'>
        Not Attending
      </label>

      <br><br>

      <label>Meal Choice:</label><br>
      <select name='diet[$id]' required>
        <option value=''>Select one</option>
        <option value='chicken'>Chicken</option>
        <option value='beef'>Beef</option>
        <option value='vegetarian'>Vegetarian</option>
      </select>
    </div>
    <br>
  ";
}

echo "<button type='submit' class='rsvp-btn'>Submit</button>";
echo "</form>";
echo "</div>";

echo "</div></body></html>";