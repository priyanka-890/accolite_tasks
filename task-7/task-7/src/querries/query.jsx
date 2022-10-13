export const GET_SHIPS = `
  query GetShips {
    ships {
      abs
      active
      home_port
      id
      image
      imo
      mmsi
      name
    }
  }
`;
export const GET_CAPSULES = `
  query GetCapsules {
    capsules {
      id
      landings
      original_launch
      reuse_count
      type
    }
  }
`;
