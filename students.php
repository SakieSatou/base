<?php

$host = 'db';
$db_name = 'students';
$db_user = 'root';
$db_pas = '123';

try {
	$db = new PDO('mysql:host='.$host.';dbname='.$db_name, $db_user, $db_pas);
} catch (PDOException $e) {
	print "Error!: " . $e->getMessage();
	die();
}

//генерируем табл
$result = '<table>';
$result .= '<tr>';
$result .= '<th>ID</th>';
$result .= '<th>ИМЯ</th>';
$result .= '<th>ФАМИЛИЯ</th>';
$result .= '<th>ГРУППА</th>';
$result .= '</tr>';

//заполнение таблицы
$stmt = $db->query("SELECT s.ID,s.SURNAME, `s`.`NAME`,g.NAME AS GR FROM `students` AS s
JOIN `groups` AS g on s.ID_GROUP=g.ID;");
while ($row = $stmt->fetch()) {
	$result = '<table>';
$result .= '<tr>';
$result .= '<th>'.$row['ID'].'</th>';
$result .= '<th>'.$row['SURNAME'].'</th>';
$result .= '<th>'.$row['NAME'].'</th>';
$result .= '<th>'.$row['GR'].'</th>';
$result .= '</tr>';

}
$result .= '</table>';
echo $result;

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>STUDENT</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<?php echo $result; ?>
</body>
</html>
