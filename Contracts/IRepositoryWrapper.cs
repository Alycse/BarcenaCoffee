using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts {
    public interface IRepositoryWrapper {
        IPantryRepository Pantry {
            get;
        }
        IDrinkRepository Drink {
            get;
        }
        IOrderRepository Order {
            get;
        }
        void Save ();
    }
}
