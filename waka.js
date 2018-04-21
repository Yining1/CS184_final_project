function build_spatial_map(particles, pCount, box, gridDimension) {
    var map = new Map();

    minPt = box.boundingBox.min;
    maxPt = box.boundingBox.max;
    width = box.parameters.width;
    height = box.parameters.height;
    depth = box.parameters.depth;

    while(pCount--) {
        // get the particle
        var particle = particles.vertices[pCount];

        coord = __spatial_map_hash(particle.x - minPt.x, particle.y - minPt.y, particle.z - minPt.z, width, height, depth, gridDimension);

        if (map.has(coord)) {
                map.get(coord).push(particle);
        } else {
            map.set(coord, [particle]);
        }


    }

    map.minPt = minPt;
    map.maxPt = maxPt;
    map.width = width;
    map.height = height;
    map.depth = depth;
    map.gridDimension = gridDimension;

    return map;
}

function __spatial_map_hash(x, y, z, width, height, depth, gridDimension) {

        grid_ct_width = width / gridDimension;
        grid_ct_height = height / gridDimension;
        grid_ct_depth = depth / gridDimension;

        coordX = Math.floor((x / width) * grid_ct_width);
        coordY = Math.floor((y / height) * grid_ct_height);
        coordZ = Math.floor((z / depth) * grid_ct_depth);

        return [coordX, coordY, coordZ].toString();

}

function getCoordThisMap(particle, map) {
    return __spatial_map_hash(particle.x - map.minPt.x, particle.y - map.minPt.y, particle.z - map.minPt.z, map.width, map.height, map.depth, map.gridDimension);
}

function getNeighborsThisMap(particle, map) {
    return map.get(getCoordThisMap(particle, map));
}
