<?php
require 'db.php';

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Get POST data FIRST
$groupCode = $_POST['group_code'];
$attendance = $_POST['attending'];
$diets = $_POST['diet'];
$timestamp = date("Y-m-d H:i:s");


$checkStmt = $conn->prepare(
  "SELECT COUNT(*) as count FROM guests 
   WHERE group_code = ? AND submitted_at IS NOT NULL"
);

$checkStmt->bind_param("s", $groupCode);
$checkStmt->execute();

$result = $checkStmt->get_result()->fetch_assoc();

if ($result['count'] > 0) {
  $message = "<h2>You already RSVPd 💌</h2> <p>If you need to make changes, please contact us.</p>";
  
}
else{
  $message = "<h2> Thank you for completing your RSVP!</h2>";
}



// Loop through each guest
$stmt = $conn->prepare(
  "UPDATE guests 
   SET attending = ?, diet = ?, submitted_at = ?
   WHERE id = ? AND group_code = ?"
);

foreach ($attendance as $guestId => $attending) {

  $guestId = (int)$guestId;
  $attending = (int)$attending;
  $diet = $diets[$guestId] ?? null;

  $stmt->bind_param(
    "issis",
    $attending,
    $diet,
    $timestamp,
    $guestId,
    $groupCode
  );

  $stmt->execute(); {
    die("Execute failed: " . $stmt->error);
  }
}
?>

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

<header>
  <div class="top-name">Diana & Michael</div>
  <nav>
    <a href="home.html">Welcome</a>
    <a href="ourstory.html">Our Story</a>
    <a href="schedule.html">Schedule</a>
    <a href="q&a.html">Q&A</a>
    <a href="RSVP.html">RSVP</a>
  </nav>
</header>

<div class="hero">
<h1 class="date"><?php echo $message ?></h1><br>