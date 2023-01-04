var htmlcourse = <?php $out = array();

foreach (glob('lessons/html/*.html') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];    
}

echo json_encode($out); ?>;

var csscourse = <?php $out = array();

foreach (glob('lessons/css/*.html') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];    
}

echo json_encode($out); ?>;

var jscourse = <?php $out = array();

foreach (glob('lessons/js/*.html') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];    
}

echo json_encode($out); ?>;
