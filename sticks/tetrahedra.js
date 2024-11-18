
function add_cylinder(scene, startPoint, endPoint, color) {
    // Calculate the midpoint
    const midPoint = new THREE.Vector3().addVectors(startPoint, endPoint).multiplyScalar(0.5);

    // Calculate the distance between the points
    const distance = startPoint.distanceTo(endPoint);

    // Create the cylinder geometry
    const radiusTop = 0.005;
    const radiusBottom = 0.005;
    const radialSegments = 32;
    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, distance, radialSegments);

    // Create the material
    const material = new THREE.MeshBasicMaterial({ color: color });
    const cylinder = new THREE.Mesh(geometry, material);

    // Position the cylinder at the midpoint
    cylinder.position.copy(midPoint);

    // Calculate the orientation
    const direction = new THREE.Vector3().subVectors(endPoint, startPoint).normalize();
    const axis = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction);
    cylinder.quaternion.copy(quaternion);

    // Add the cylinder to the scene
    scene.add(cylinder);
}


function break_stick() {

    var a, b, c, d, e, f;

    //////////////////////////////////////////////////////////
    // Generate random break points 
    let breaks = [0.0, 1.0];
    for (let i = 0; i < 5; i++) {
        breaks.push(Math.random());
    }

    // Sort the array in ascending order
    breaks.sort((a, b) => a - b);
    let lengths = [];
    for (let i = 0; i < breaks.length - 1; i++) {
        lengths.push(breaks[i + 1] - breaks[i]);
    }
    lengths.sort((a, b) => a - b);
    console.log(breaks);
    console.log(lengths);
    a = lengths[0];
    b = lengths[1];
    c = lengths[2];
    d = lengths[3];
    e = lengths[4];
    f = lengths[5];
    console.log(a + b + c + d + e + f);

    document.getElementById("lengthoutput").innerHTML = `${a}, ${b}, ${c}, ${d}, ${e}, ${f}`;

    //////////////////////////////////////////////////////////
    // Draw breaks  
    // Get the canvas element by its ID
    const canvas = document.getElementById('stick');
    let w = canvas.width;
    let h = 50;

    // Get the 2D drawing context from the canvas
    const ctx = canvas.getContext('2d');

    // Draw the rectangle
    ctx.fillStyle = "#ee2222";
    ctx.fillRect(0, 0, a * w, h);
    ctx.fillStyle = "#22bb22";
    ctx.fillRect(a * w, 0, b * w, h);
    ctx.fillStyle = "#2222ee";
    ctx.fillRect((a + b) * w, 0, c * w, h);
    ctx.fillStyle = "#fba055";
    ctx.fillRect((a + b + c) * w, 0, d * w, h);
    ctx.fillStyle = "#8822dd";
    ctx.fillRect((a + b + c + d) * w, 0, e * w, h);
    ctx.fillStyle = "#faaaab";
    ctx.fillRect((a + b + c + d + e) * w, 0, f * w, h);

    //////////////////////////////////////////////////////////
    // Draw Tetrahedra 
    draw_tetrahedron([a, b, c, d, e, f], "fundamental1");
    draw_tetrahedron([a, b, c, d, f, e], "fundamental2");
    draw_tetrahedron([a, b, c, e, d, f], "fundamental3");
    draw_tetrahedron([a, b, c, e, f, d], "fundamental4");
    draw_tetrahedron([a, b, d, e, c, f], "fundamental5");
    draw_tetrahedron([a, b, d, e, f, c], "fundamental6");
    draw_tetrahedron([a, c, d, e, f, b], "fundamental7");

    return [a, b, c, d, e, f];
}

function draw_tetrahedron_net(lengths, canvas_id) {
    const l1 = lengths[0];
    const l2 = lengths[1];
    const l3 = lengths[2];
    const l4 = lengths[3];
    const l5 = lengths[4];
    const l6 = lengths[5];
    const colors = [0xee2222,
        0x22bb22,
        0x2222ee,
        0xfba055,
        0x8822dd,
        0xfaaaab];

    // Determine points 
    const P1 = new THREE.Vector3(0, 0, 0);
    const P2 = new THREE.Vector3(l1, 0, 0);
    const P3 = new THREE.Vector3((l1 * l1 + l3 * l3 - l2 * l2) / (2 * l1),
        Math.sqrt(l3 * l3 - Math.pow((l3 * l3 + l1 * l1 - l2 * l2) / (2 * l1), 2)),
        0);
    const P4 = new THREE.Vector3((l1 * l1 + l4 * l4 - l5 * l5) / (2 * l1),
        -Math.sqrt(l3 * l3 - Math.pow((l1 * l1 + l4 * l4 - l5 * l5) / (2 * l1), 2)),
        0);

    // Step 1: Set up the scene, camera, and renderer with antialiasing
    const scene = new THREE.Scene();
    let window_width = 150;
    let window_height = 150;
    const camera = new THREE.PerspectiveCamera(75, window_width / window_height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(canvas_id), antialias: true });
    renderer.setSize(window_width, window_height);
    renderer.setClearColor(0xffffff);
    renderer.domElement.style.display = 'inline-block';

    // Define start and end points
    const startPoint = new THREE.Vector3(3, 2, -5);
    const endPoint = new THREE.Vector3(10, 15, 20);

    // The cylinder color depends on the length
    let lengths_for_color = [l1, l2, l3, l4, l5, l6];
    lengths_for_color.sort();
    add_cylinder(scene, P1, P2, colors[lengths_for_color.indexOf(l1)]);
    add_cylinder(scene, P2, P3, colors[lengths_for_color.indexOf(l2)]);
    add_cylinder(scene, P3, P1, colors[lengths_for_color.indexOf(l3)]);
    add_cylinder(scene, P1, P4, colors[lengths_for_color.indexOf(l4)]);
    add_cylinder(scene, P4, P2, colors[lengths_for_color.indexOf(l5)]);

    // Position the camera so we can see the cylinder
    camera.position.z = 0.3;

    // Render the scene
    function animate() {
        //requestAnimationFrame(animate);            
        scene.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}



function draw_tetrahedron(lengths, canvas_id) {
    const l1 = lengths[0];
    const l2 = lengths[1];
    const l3 = lengths[2];
    const l4 = lengths[3];
    const l5 = lengths[4];
    const l6 = lengths[5];
    const colors = [0xee2222,
        0x22bb22,
        0x2222ee,
        0xfba055,
        0x8822dd,
        0xfaaaab];

    // Determine points 
    const P1 = new THREE.Vector3(0, 0, 0);
    const P2 = new THREE.Vector3(l1, 0, 0);
    const P3 = new THREE.Vector3((l1 * l1 + l3 * l3 - l2 * l2) / (2 * l1),
        Math.sqrt(l3 * l3 - Math.pow((l3 * l3 + l1 * l1 - l2 * l2) / (2 * l1), 2)),
        0);
    const x = (l1 * l1 + l4 * l4 - l5 * l5) / (2 * l1);
    const r = Math.sqrt(l4 * l4 - Math.pow((l1 * l1 + l4 * l4 - l5 * l5) / (2 * l1), 2));
    const y = (Math.pow(x - P3.x, 2) + P3.y * P3.y + r * r - l6 * l6) / (2 * P3.y);
    const z = Math.sqrt(r * r - y * y);
    const P4 = new THREE.Vector3(x, y, z);

    // Step 1: Set up the scene, camera, and renderer with antialiasing
    const scene = new THREE.Scene();
    let window_width = 200;
    let window_height = 200;
    const camera = new THREE.PerspectiveCamera(75, window_width / window_height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(canvas_id), antialias: true });
    renderer.setSize(window_width, window_height);
    renderer.setClearColor(0xffffff);
    renderer.domElement.style.display = 'inline-block';
    renderer.domElement.style.border = "thin solid #eeeeee";

    // Define start and end points
    const startPoint = new THREE.Vector3(3, 2, -5);
    const endPoint = new THREE.Vector3(10, 15, 20);

    // The cylinder color depends on the length
    let lengths_for_color = [l1, l2, l3, l4, l5, l6];
    lengths_for_color.sort();
    add_cylinder(scene, P1, P2, colors[lengths_for_color.indexOf(l1)]);
    add_cylinder(scene, P2, P3, colors[lengths_for_color.indexOf(l2)]);
    add_cylinder(scene, P3, P1, colors[lengths_for_color.indexOf(l3)]);
    add_cylinder(scene, P1, P4, colors[lengths_for_color.indexOf(l4)]);
    add_cylinder(scene, P4, P2, colors[lengths_for_color.indexOf(l5)]);
    add_cylinder(scene, P3, P4, colors[lengths_for_color.indexOf(l6)]);

    // Position the camera so we can see the cylinder
    camera.position.z = 0.4;
    camera.position.y = 0.1;

    // Render the scene
    var mouseOverAnimate = false;
    function animate() {
        // setTimeout( function() { requestAnimationFrame(animate); }, 100 )
        scene.rotation.y += 0.01;
        renderer.render(scene, camera);
        if (mouseOverAnimate) {
            requestAnimationFrame(animate);
        }
    }
    animate();

    // Mouse events 
    document.getElementById(canvas_id).addEventListener('mouseover', function (event) {
        mouseOverAnimate = true;
        requestAnimationFrame(animate);
    })
    document.getElementById(canvas_id).addEventListener('mouseout', function (event) {
        mouseOverAnimate = false;
        requestAnimationFrame(animate);
    })
}




function can_construct(l1, l2, l3, l4, l5, l6) {
    if (!(l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1)) { return false; }  // Triangle abc 
    if (!(l1 + l4 > l5 && l1 + l5 > l4 && l4 + l5 > l1)) { return false; }  // Triangle ade 
    p3 = [(l1 * l1 + l3 * l3 - l2 * l2) / (2 * l1),
    Math.sqrt(l3 * l3 - Math.pow((l1 * l1 + l3 * l3 - l2 * l2) / (2 * l1), 2))];
    p4 = [(l1 * l1 + l4 * l4 - l5 * l5) / (2 * l1),
    Math.sqrt(l4 * l4 - Math.pow((l1 * l1 + l4 * l4 - l5 * l5) / (2 * l1), 2))];
    fmin = Math.sqrt(Math.pow(p4[0] - p3[0], 2) + Math.pow(p4[1] - Math.abs(p3[1]), 2));
    fmax = Math.sqrt(Math.pow(p4[0] - p3[0], 2) + Math.pow(p4[1] + Math.abs(p3[1]), 2));
    if (isNaN(fmin) || isNaN(fmax)) { return false; }
    if (l6 < fmin || l6 > fmax) { return false; }
    return true;
}

function has_tetrahedral_construction(a, b, c, d, e, f) {
    return can_construct(a, b, c, d, e, f) ||
        can_construct(a, b, c, d, f, e) ||
        can_construct(a, b, c, e, d, f) ||
        can_construct(a, b, c, e, f, d) ||
        can_construct(a, b, d, e, c, f) ||
        can_construct(a, b, d, e, f, c) ||
        can_construct(a, c, d, e, f, b);
}

function make_tetrahedron() {
    let a, b, c, d, e, f;
    [a, b, c, d, e, f] = break_stick();
    if (!has_tetrahedral_construction(a, b, c, d, e, f)) {
        setTimeout(function () { make_tetrahedron(); }, 10);
    }
}