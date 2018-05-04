function build_spatial_map(particles, pCount, box, gridDimension) {
    var map = new Map();

    var minPt = box.boundingBox.min;
    var maxPt = box.boundingBox.max;
    var width = box.parameters.width;
    var height = box.parameters.height;
    var depth = box.parameters.depth;

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

        var grid_ct_width = width / gridDimension;
        var grid_ct_height = height / gridDimension;
        var grid_ct_depth = depth / gridDimension;

        var coordX = Math.floor((x / width) * grid_ct_width);
        var coordY = Math.floor((y / height) * grid_ct_height);
        var coordZ = Math.floor((z / depth) * grid_ct_depth);

        return [coordX, coordY, coordZ].toString();

}

function getCoordThisMap(particle, map) {
    // console.log(map);
    return __spatial_map_hash(particle.x - map.minPt.x, particle.y - map.minPt.y, particle.z - map.minPt.z, map.width, map.height, map.depth, map.gridDimension);
}

function getNeighborsThisMap(particle, map) {
    // console.log("particle", particle);
    var coord = getCoordThisMap(particle, map);
    // console.log("coord", coord);
    var res = map.get(coord);
    // console.log(res);
    return res;
}
