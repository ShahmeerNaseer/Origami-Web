const categories = [
    {
        id: 1,
        name: "Faces",
        icon: "fa-face-smile",
        level: "easy",
        image: "images/crane.png",
        description: "Simple origami faces including dogs, cats, and human shapes.",
        designName: "Dog Face",
        steps: ["Fold paper diagonally.", "Fold the top corners down for ears.", "Fold the bottom tip up for the snout.", "Draw eyes and nose."]
    },
    {
        id: 2,
        name: "Animals",
        icon: "fa-dog",
        level: "medium",
        image: "images/banner.png",
        description: "Create wonderful land animals out of paper.",
        designName: "Jumping Frog",
        steps: ["Fold the paper in half vertically.", "Fold corners to center to make a waterbomb base.", "Fold legs outward.", "Fold the bottom up to create a spring."]
    },
    {
        id: 3,
        name: "Birds",
        icon: "fa-dove",
        level: "complex",
        image: "images/crane.png",
        description: "Elegant birds taking flight.",
        designName: "Paper Crane",
        steps: ["Step 1: Fold paper diagonally.", "Step 2: Create a square base.", "Step 3: Fold edges to the center to form a bird base.", "Step 4: Fold the wings down.", "Step 5: Form the head by inside reverse folding one point."]
    },
    {
        id: 4,
        name: "Flowers",
        icon: "fa-seedling",
        level: "medium",
        image: "images/flower.png",
        description: "Beautiful paper blooms.",
        designName: "Tulip",
        steps: ["Fold diagonally to form a triangle.", "Fold both bottom corners up to the top tip.", "Slightly fold the side corners inward.", "Attach to a paper stem."]
    },
    {
        id: 5,
        name: "Fish",
        icon: "fa-fish",
        level: "easy",
        image: "images/banner.png",
        description: "Swim in the paper sea.",
        designName: "Simple Fish",
        steps: ["Fold paper in half diagonally.", "Fold top tip down.", "Fold bottom corners up to form fins.", "Draw a cute eye."]
    },
    {
        id: 6,
        name: "Insects",
        icon: "fa-bug",
        level: "complex",
        image: "images/flower.png",
        description: "Tiny and intricate paper bugs.",
        designName: "Butterfly",
        steps: ["Start with a waterbomb base.", "Fold the front flaps up.", "Flip over and fold the bottom tip past the top edge.", "Fold in half to lock the shape."]
    },
    {
        id: 7,
        name: "Boxes",
        icon: "fa-box",
        level: "medium",
        image: "images/banner.png",
        description: "Useful and beautiful paper containers.",
        designName: "Masu Box",
        steps: ["Fold paper in half both ways.", "Fold all 4 corners to the center (Blintz fold).", "Fold edges to center line.", "Open sides and form the box walls."]
    },
    {
        id: 8,
        name: "Toys",
        icon: "fa-gamepad",
        level: "easy",
        image: "images/crane.png",
        description: "Fun, interactive origami toys.",
        designName: "Paper Airplane",
        steps: ["Fold paper in half lengthwise.", "Fold top corners to the center line.", "Fold the peak down.", "Fold wings out."]
    },
    {
        id: 9,
        name: "Stars",
        icon: "fa-star",
        level: "easy",
        image: "images/flower.png",
        description: "Lucky stars and decorative star shapes.",
        designName: "Lucky Star",
        steps: ["Cut a long strip of paper.", "Tie a knot at one end and flatten it into a pentagon.", "Wrap the remaining strip around the pentagon.", "Puff out the sides with your nails."]
    },
    {
        id: 10,
        name: "Decorative Items",
        icon: "fa-gem",
        level: "complex",
        image: "images/banner.png",
        description: "Beautiful geometric and modular origami.",
        designName: "Origami Kusudama",
        steps: ["Fold 6 individual flower units.", "Glue or stitch the units together to form a sphere.", "Add a tassel at the bottom for decoration."]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const categoryList = document.getElementById("categoryList");
    
    if (categoryList) {
        categories.forEach(cat => {
            const col = document.createElement("div");
            col.className = `col-md-6 col-lg-4 mb-4 ${cat.level}`;
            
            col.innerHTML = `
                <div class="card h-100 shadow-sm border-0">
                    <img src="${cat.image}" class="card-img-top" alt="${cat.name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body text-center">
                        <i class="fa-solid ${cat.icon} fa-2x mb-2 text-primary-custom"></i>
                        <h4 class="card-title fw-bold">${cat.name}</h4>
                        <span class="badge bg-soft-green text-dark mb-2">${cat.level.toUpperCase()}</span>
                        <p class="card-text text-muted">${cat.description}</p>
                        <button class="btn btn-outline-primary rounded-pill w-100 mt-2" onclick="openDesignModal(${cat.id})">
                            Learn ${cat.designName}
                        </button>
                    </div>
                </div>
            `;
            categoryList.appendChild(col);
        });
    }

    // Filter functionality
    const hash = window.location.hash;
    if(hash && categoryList) {
        // Just a simple scroll for now, or filter logic
        // E.g., if href="#easy", filter to easy
    }
});

function openDesignModal(id) {
    const cat = categories.find(c => c.id === id);
    if (!cat) return;

    document.getElementById("modalTitle").innerText = cat.designName + " (" + cat.name + ")";
    document.getElementById("modalImg").src = cat.image;
    document.getElementById("modalDesc").innerText = cat.description;
    
    const stepsContainer = document.getElementById("modalSteps");
    stepsContainer.innerHTML = "";
    
    cat.steps.forEach((step, index) => {
        stepsContainer.innerHTML += `
            <div class="step-card">
                <span class="step-number">${index + 1}</span>
                <span class="text-dark fw-medium">${step}</span>
            </div>
        `;
    });

    const modal = new bootstrap.Modal(document.getElementById('designModal'));
    modal.show();
}
