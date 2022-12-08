<!DOCTYPE html>
<html lang="en">
	<head>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
		<meta charset="UTF-8" name="viewport" content="width=device-width"/>
	</head>
<body>
	<div class="col-md-3"></div>
	<div class="col-md-6 well">
		<h3 class="text-primary">PHP - Simple Barcode & QR Code Generator</h3>
		<hr style="border-top:1px dotted #ccc;"/>
		<div class="col-md-2"></div>
		<div class="col-md-8">
			<form method="POST">
				<div class="form-group">
					<label>Enter a text</label>
					<input type="text" class="form-control" name="barcode"/>
					<br />
					<center>
						<button class="btn btn-primary" name="generate">Generate Bar Code</button>
						<button class="btn btn-primary" type="submit" name="generateqr">Generate QR Code</button>
					</center>
					<br />
					<?php include 'generate.php'?>
				</div>
			</form>
			<?php 
			include 'phpqrcode/qrlib.php';
			$PNG_TEMP_DIR = 'temp/';
			if (!file_exists($PNG_TEMP_DIR))
				mkdir($PNG_TEMP_DIR);

			$filename = $PNG_TEMP_DIR . 'test.png';
			if (isset($_POST["generateqr"])) {
				$codeString = $_POST["barcode"];
				$filename = $PNG_TEMP_DIR . 'test' . 
				md5($codeString) . '.png';

				QRcode::png($codeString, $filename);
				echo '<center><img src="' . $PNG_TEMP_DIR . basename($filename) . '"/><hr/></center>';
			}
			?>
		</div>
	</div>
</body>
</html>